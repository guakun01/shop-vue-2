import Vue from 'vue'
import App from './App.vue'
import './cube-ui'

// import 'common/scss/index.scss'


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
