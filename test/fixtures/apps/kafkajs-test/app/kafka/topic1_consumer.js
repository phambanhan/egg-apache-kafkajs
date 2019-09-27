'use strict';

const Subscription = require('egg').Subscription;

class MessageConsumer extends Subscription {
  async subscribe(message) {
    console.log('Message', message);
  }
}
module.exports = MessageConsumer;
