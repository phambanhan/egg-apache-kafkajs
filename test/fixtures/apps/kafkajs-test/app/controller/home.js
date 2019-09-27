'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    try {
      const kafka = this.ctx.app.kafka;
      const producer = kafka.producer();
      await producer.connect();
      await producer.send({
        topic: 'topic1',
        messages: [{
          value: 'Hello World',
        }],
      });

      this.ctx.body = 'Success';
    } catch (err) {
      console.log('err', err);
      this.ctx.status = 500;
    }
  }
}

module.exports = HomeController;
