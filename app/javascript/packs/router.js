// for vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'

// Components for router
import Top from '../components/Top'
import Login from '../components/user/Login'
import TaskNew from '../components/task/TaskNew'
import TaskIndex from '../components/task/TaskIndex' 
import FormUserEdit from '../components/form/FormUserEdit' 

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
      path: '/user/:id/edit',
      name: 'FormUserEdit',
      component: FormUserEdit
    },
  ]
})

Vue.use(VueRouter)

export default router