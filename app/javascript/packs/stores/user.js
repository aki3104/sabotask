import axios from "axios";

export default {
  namespaced: true,

  state: {
    users: [{}],
    drawer: null
  },

  getters: {
    users(state) {
      return state.users;
    },

    sideDrawer(state) {
      console.log(state.drawer)
      return state.drawer;
    }
  },  
  
  mutations: {
    users(state, payload) {
      state.users = payload.users;
    },

    // 各フォームの値をVuexストアに渡す
    update(state, { value, keyName }) {
      const user = state.users[0];
      user[keyName] = value;
    },

    //再度メニューの開閉制御
    formSideMenu(state) {
      state.drawer = !state.drawer
      console.log(state.drawer)
    }
  },

  actions: {
    // users#indexと紐づく
    index(context) {
      axios
        .get("/api/v1/users")
        .then(response => {
          context.commit("users", { users: response.data });
        })
        .catch(error => {
          console.error(error);
        });
    },

    // users#createと紐づく
    create(context, routeTo) {
      const user = context.state.users[0];
      axios
        .post("/api/v1/users", user)
        .then(response => {
          context.commit("users", { users: response.data });
          routeTo
        })
        .catch(error => {
          console.error(error);
        });
    },

    // users#updateと紐づく
    update(context, routeTo) {
      const user = context.state.users[0];
      axios
        .patch(`/api/v1/users/${user.id}`, user)
        .then(response => {
          context.commit("users", { users: response.data });
          routeTo
        })
        .catch(error => {
          console.error(error);
        });
    },

    // sessions#createと紐づく
    login(context, user, routeTo) {
      axios
        .post("/api/v1/login", user)
        .then(response => {
          context.commit("users", { users: response.data });
          routeTo
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
  
};
