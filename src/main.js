import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { PiniaVuePlugin, createPinia } from 'pinia'

Vue.config.productionTip = false
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  vuetify,
  pinia,
  render: h => h(App)
}).$mount('#app')
