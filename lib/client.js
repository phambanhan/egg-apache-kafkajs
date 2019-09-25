'use strict';

const { Kafka } = require('kafkajs');

module.exports = function(config) {
  return new Kafka(config);
};
