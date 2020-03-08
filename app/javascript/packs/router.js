// for vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'

// Components for router
import Top from '../components/Top'
import Login from '../components/user/Login'
import TaskNew from '../components/task/TaskNew'
import TaskIndex from '../components/task/TaskIndex' 
import UserEdit from '../components/user/UserEdit' 

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
    {
      path: '/tasks/index',
      name: 'TaskIndex',
      component: TaskIndex
    },
    {
      path: '/user/:id/Edit',
      name: 'UserEdit',
      component: UserEdit
    },
  ]
})

Vue.use(VueRouter)

export default router