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

## Usage

```js
// {app_root}/config/plugin.js
exports.kafka = {
  enable: true,
  package: 'egg-apache-kafkajs',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
config.kafka = {
    clientId: 'clientId',
    brokers: ['localhost:9092']
  };
```

## License

[MIT](LICENSE)
