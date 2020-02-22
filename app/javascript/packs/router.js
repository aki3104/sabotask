// for vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'

// Components for router
import Top from '../components/Top'
import Login from '../components/user/Login'
import TaskNew from '../components/task/TaskNew'

// Routing
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/tasks/new',
      name: 'TaskNew',
      component: TaskNew
    },
  ]
})

Vue.use(VueRouter)

export default router