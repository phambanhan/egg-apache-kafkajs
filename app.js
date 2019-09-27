'use strict';
const fs = require('fs');
const path = require('path');
const { Kafka } = require('kafkajs');

module.exports = async app => {
  const topicSubscription = new Map();

  const { consumers, options } = app.config.kafka;
  app.kafka = new Kafka(options);

  for (const consumerConfig of consumers) {
    const topics = consumerConfig.topics || [];
    const consumer = app.kafka.consumer({ groupId: consumerConfig.groupId });
    await consumer.connect();

    app.beforeClose(async function() {
      await consumer.disconnect();
    });

    for (const topic of topics) {
      await consumer.subscribe({ topic });
      const filepath = path.join(app.config.baseDir, `app/kafka/${topic}_consumer.js`);
      if (!fs.existsSync(filepath)) {
        app.coreLogger.warn('[egg-apache-kafkajs] can not find the file:`%s`', filepath);
        continue;
      } else {
        const Subscriber = require(filepath);
        topicSubscription.set(topic, Subscriber);
      }
    }
    await consumer.run({
      eachMessage: async ({ topic, message }) => {
        const Subscriber = topicSubscription.get(topic);
        if (Subscriber) {
          const ctx = app.createAnonymousContext();
          const subscriber = new Subscriber(ctx);
          subscriber.subscribe(message);
        }
      },
    });
  }
  const producer = app.kafka.producer();
  await producer.connect();
  app.beforeClose(async () => {
    await producer.disconnect();
  });
  app.kafka.send = async msg => {
    return await producer.send(msg);
  };
};
