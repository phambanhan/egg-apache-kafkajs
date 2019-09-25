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
    clientId: appInfo.name,
    brokers: ['broker:9092']
  };

  return config;
};
