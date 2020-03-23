export default {
  namespaced: true,

  state: {
    loginned: false,
    drawer: false,
  },
  mutations: {
    login(state) {
      state.loginned = true;
    },
    logout(state) {
      state.loginned = false;
    },
    //サイドメニューの開閉制御
    formSideMenu(state) {
      state.drawer = !state.drawer
    },
  },
  getters: {
    loginned(state) {
      return state.loginned;
    },
    sideDrawer(state) {
      return state.drawer;
    }
  }
}