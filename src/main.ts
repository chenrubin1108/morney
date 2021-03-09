import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Layout from '@/components/Layout.vue'
import Nav from '@/components/Nav.vue'
import svgIcon from '@/components/svgIcon.vue'
import buttontag from '@/components/money/buttontag.vue'
Vue.config.productionTip = false
Vue.component('Layout',Layout)
Vue.component('Nav',Nav)
Vue.component('svgIcon',svgIcon)
Vue.component('buttontag',buttontag)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
