import nc from './nats-0.8.8';

function vueNats(Vue, options) {

  if (vueNats.installed) return;

  let nats = nc.connect(options);

  Object.defineProperty(Vue.prototype, '$nats', {
    get: function() {
      let self = this;
      return {
        subscribe: function() {
          let sid = nats.subscribe.apply(nats, arguments);
          self.$on('hook:beforeDestroy', function() {
            nats.unsubscribe(sid);
          });
          return sid;
        },
        publish: nats.publish.bind(nats),
        request: nats.request.bind(nats),
        requestOne: nats.requestOne.bind(nats),
        unsubscribe: nats.unsubscribe.bind(nats),
        flush: nats.flush.bind(nats),
        timeout: nats.timeout.bind(nats),
        close: nats.close.bind(nats)
      };
    }
  });

}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueNats);
}

export default vueNats;
