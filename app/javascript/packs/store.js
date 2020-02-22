import Vue from 'vue'
import Vuex from 'vuex'

import task from './stores/task.js'
import user from './stores/user.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  modules: {
    task,
    user,
  },

})

export default store