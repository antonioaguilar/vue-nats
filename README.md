# vue-nats

An in-browser WebSocket message bus for [NATS](http://nats.io/) applications

### Install

```bash
npm install --save vue-nats
```

### Usage

```javascript
// in src/main.js
import vueNats from 'vue-nats';

Vue.use(vueNats, {
  url: 'ws://<nats-websocket-relay>:8080',
  json: true, // use JSON data payload
  reconnect: true, // always reconnect
  maxReconnectAttempts: -1, // retry forever
  reconnectTimeWait: 1000 // try to reconnect every second
});

// in Vue component
export default {
  name: 'hello-nats',
  mounted() {
    // publish an event every second
    setInterval(() => {
      this.$nats.publish('events.server-5387', {
        cpu: 56,
        memory: 512,
        epoch: Date.now()
      });
    }, 1000);

    // subscribe to all server IDs
    this.$nats.subscribe('events.*', (event) => {
      console.log('Server reading:', event);
    });
  }
};
```

This library is compatible with all the API methods in [node-nats](https://github.com/nats-io/node-nats#basic-usage).

### Testing

To test `vue-nats`, you need to connect to a [NATS server](https://github.com/nats-io/gnatsd) using a Websocket-to-TCP relay such as [nats-relay](https://hub.docker.com/r/aaguilar/nats-relay/) or [ws-tcp-relay](https://github.com/isobit/ws-tcp-relay).

You can use Docker to run the `gnatsd` server and the `Websockets-to-TCP` relay:

```
# launch the gnatsd server
docker run -it--name=nats-server --rm -d -p 4222:4222 nats -DV

# launch the relay
docker run -it --name=relay --rm -d -p 8080:8080 aaguilar/nats-relay -p 8080 nats://nats-server:4222

# then configure vue-nats to connect to the relay
Vue.use(vueNats, { url: 'ws://0.0.0.0:8080', json: true });
```
