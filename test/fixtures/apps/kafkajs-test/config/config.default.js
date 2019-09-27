'use strict';

/**
 * egg-kafkajs default config
 * @member Config#kafkajs
 * @property {String} SOME_KEY - some description
 */
exports.keys = '_lssfsfsfs';
exports.kafka = {
  options: {
    clientId: 'clientId',
    brokers: [ 'broker:9092' ],
    connectionTimeout: 3000,
  },
  consumers: [
    {
      groupId: 'consumer-groupId',
      topics: [ 'topic1' ],
    },
  ],
};
