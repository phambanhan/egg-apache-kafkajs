'use strict';

module.exports = appInfo => {
  const config = {};

  /**
   * Kafkajs default config
   * https://kafka.js.org/docs/configuration
   * @type {{app: boolean, agent: boolean, clientId: *, brokers: [string] }}
   */
  config.kafka = {
    app: true,
    agent: false,
    options: {
      clientId: appInfo.name,
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

  return config;
};
