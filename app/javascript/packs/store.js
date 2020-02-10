import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import taskStore from './stores/task.js'
import userStore from './stores/user.js'

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  modules: {
    taskStore,
    userStore,
  },

})

export default store