export default {
  namespaced: true,

  state: {
    loginned: false
  },
  mutations: {
    login(state) {
      state.loginned = true;
    },
    logout(state) {
      state.loginned = false;
    },
  },
  getters: {
    loginned(state) {
      return state.loginned;
    },
  }
}