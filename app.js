'use strict';
const Client = require('./lib/client');

module.exports = app => {
  app.kafka = Client(app.config.kafka);
};
