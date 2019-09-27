# egg-apache-kafkajs

<!--
Description here.
-->

[kafkajs](https://kafka.js.org/) plugin for Egg.js.

> NOTE: This plugin just for integrate kafkajs into Egg.js, more documentation please visit https://kafka.js.org/docs/getting-started.

## Install

```bash
$ npm i egg-apache-kafkajs --save
```
or

```bash
$ yarn add egg-apache-kafkajs
```

## Configuration

```js
// {app_root}/config/config.default.js
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
```

```js
// {app_root}/config/plugin.js
exports.kafka = {
  enable: true,
  package: 'egg-apache-kafkajs',
};
```

## Usage

```js
// Producer
const kafka = this.ctx.app.kafka;
await kafka.send({
  topic: 'topic1',
  messages: [{
    value: 'Hello World',
  }],
});
```

```js
// Producer
const kafka = this.ctx.app.kafka;
const producer = kafka.producer();
await producer.connect();
await producer.send({
  topic: 'topic1',
  messages: [{
    value: 'Hello World',
  }],
});
```

## License

[MIT](LICENSE)
