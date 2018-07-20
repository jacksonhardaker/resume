// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import * as VueMaterial from 'vue-material/dist/components'
import VueStash from 'vue-stash'
import VueResource from 'vue-resource'
import App from './App'
import store from './store'
import routes from './routes'

// Styles
import 'vue-material/dist/vue-material.min.css'
import './assets/scss/index.scss'

// Use Material Design components
[VueMaterial.MdApp, VueMaterial.MdButton, VueMaterial.MdContent, VueMaterial.MdAvatar, VueMaterial.MdIcon, VueMaterial.MdToolbar, VueMaterial.MdDrawer, VueMaterial.MdList].forEach(component => Vue.use(component))
Vue.use(VueStash)
Vue.use(VueResource)

Vue.config.productionTip = false

// Wire-up dummy API routes
Vue.http.interceptors.unshift((request, next) => {
  let route = routes.find((item) => {
    return (request.method === item.method && request.url === item.url)
  })

  if (!route) {
    // we're just going to return a 404 here, since we don't want our test suite making a real HTTP request
    next(request.respondWith({status: 404, statusText: 'Oh no! Not found!'}))
  } else {
    next(request.respondWith(route.response, { status: 200 }))
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  data: {
    store
  }
})
