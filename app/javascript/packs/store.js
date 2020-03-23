import Vue from 'vue'
import Vuex from 'vuex'

import task from './stores/task.js'
import user from './stores/user.js'
import session from './stores/session.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  modules: {
    task,
    user,
    session,
  },

})

export default store