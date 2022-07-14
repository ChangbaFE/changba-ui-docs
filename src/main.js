import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ChangbaUI from 'changba-ui'
import components from './components';
import 'changba-ui/lib/theme/index.css'
import 'changba-ui/lib/theme/skins/skin-black-light.css'

Vue.use(ChangbaUI)
Vue.use(components)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event('render-event'))
}).$mount('#app')
