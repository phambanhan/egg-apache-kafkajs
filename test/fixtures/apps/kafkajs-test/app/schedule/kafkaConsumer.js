module.exports = {
  schedule: {
    immediate: true,
    type: 'worker'
  },
  async task(ctx) {
    const kafka = ctx.app.kafka;
    const topic = 'topic1';
    const consumer = kafka.consumer({ groupId: 'kafka-js' });

    const run = async () => {
      await consumer.connect();
      await consumer.subscribe({ topic });
      await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
          const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`;
          console.log(`- ${prefix} ${message.key}#${message.value}`)
        },
      })
    }
    run().catch(e => console.error(`[kafkaUpdateUser] ${e.message}`, e))
  },
};
