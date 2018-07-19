// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import * as VueMaterial from 'vue-material/dist/components'
import VueStash from 'vue-stash'
import App from './App'
import store from './store'

// Styles
import 'vue-material/dist/vue-material.min.css'

// Use Material Design components
[VueMaterial.MdApp, VueMaterial.MdButton, VueMaterial.MdContent, VueMaterial.MdAvatar, VueMaterial.MdIcon].forEach(component => Vue.use(component))
Vue.use(VueStash)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  data: {
    store
  }
})
