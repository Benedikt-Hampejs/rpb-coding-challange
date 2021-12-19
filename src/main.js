import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('toCurrency', function (value) {
  if (typeof value !== "number") {
      return value;
  }
  var formatter = new Intl.NumberFormat('de-DE', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'EUR'
  });
  return formatter.format(value);
});

new Vue({
  render: h => h(App),
}).$mount('#app')
