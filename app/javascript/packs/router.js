// for vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'

// Components for router
import Top from '../components/Top'

// Routing
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
  ]
})

Vue.use(VueRouter)

export default router