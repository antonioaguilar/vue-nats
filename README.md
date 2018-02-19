# vue-nats

An in-browser WebSocket message bus for [NATS](http://nats.io/) applications

### Install

```bash
$ npm install --save vue-nats
```

### Usage

```javascript
import vueNats from 'vue-nats';

Vue.use(vueNats, {
  url: 'ws://localhost:8080',
  json: true,
  reconnect: true,
  maxReconnectAttempts: -1, // retry forever
  reconnectTimeWait: 1000
});
```
