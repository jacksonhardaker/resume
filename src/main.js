// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import * as VueMaterial from 'vue-material/dist/components'
import VueStash from 'vue-stash'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueHead from 'vue-head'
import App from './App'
import store from './store'
import routes from './routes'

// Styles
import 'vue-material/dist/vue-material.min.css'
import './assets/scss/index.scss'

// Use Material Design components
[VueMaterial.MdApp, VueMaterial.MdButton, VueMaterial.MdContent, VueMaterial.MdAvatar, VueMaterial.MdIcon, VueMaterial.MdToolbar, VueMaterial.MdDrawer, VueMaterial.MdList].forEach(component => Vue.use(component))
Vue.use(VueHead)
Vue.use(VueRouter)
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
  },
  head: {
    title: {
      inner: 'Jackson Hardaker | Front-end Engineer'
    },
    // Meta tags
    meta: [
      { n: 'application-name', c: 'Jackson Hardaker - Front-end Engineer' },
      { n: 'description', c: 'Front-end Engineer with almost 10 years of experience. Lived in NYC since 2009. Born and raised in Christchurch, New Zealand.' }, // id to replace intead of create element
      // Twitter
      { n: 'twitter:title', c: 'Jackson Hardaker - Front-end Engineer' },
      { n: 'twitter:description', c: 'Front-end Engineer with almost 10 years of experience. Lived in NYC since 2009. Born and raised in Christchurch, New Zealand.' },
      // Google+ / Schema.org
      { itemprop: 'name', c: 'Jackson Hardaker - Front-end Engineer' },
      { itemprop: 'description', c: 'Front-end Engineer with almost 10 years of experience. Lived in NYC since 2009. Born and raised in Christchurch, New Zealand.' },
      // Facebook / Open Graph
      { p: 'og:title', c: 'Jackson Hardaker - Front-end Engineer' },
      { p: 'og:description', c: 'Front-end Engineer with almost 10 years of experience. Lived in NYC since 2009. Born and raised in Christchurch, New Zealand.' },
      { p: 'og:image', c: require('./assets/img/jackson-headshot-600x600.jpg') }
    ],
    // link tags
    link: [
      // { rel: 'canonical', href: 'http://example.com/#!/contact/', id: 'canonical' },
      // { rel: 'author', href: 'author', undo: false }, // undo property - not to remove the element
      // { r: 'icon', h: 'path/to/icon-32.png', sz: '32x32', t: 'image/png' }
    ],
    script: [
    ],
    style: [
    ]
  }
})
