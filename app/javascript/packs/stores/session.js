export default {
  namespaced: true,

  state: {
    loginStatus: false
  },
  mutations: {
    login(state) {
      state.loginStatus = true;
    },
    logout(state) {
      console.log(loginStatus)
      state.loginStatus = false;
    },
  },
  getters: {
    loginStatus(state) {
      console.log(state.loginStatus)
      return state.loginStatus;
    },
  }
}