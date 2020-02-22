import axios from "axios";

export default {
  namespaced: true,

  state: {
    user: {},
    users: []
  },

  getters: {
    user(state) {
      return state.user;
    },
    users(state) {
      return state.users;
    }
  },

  mutations: {
    user(state) {
      state.user = payload.user;
    },
    users(state) {
      state.users = payload.users;
    },
    update(state, { value, keyName }) {
      state.user[keyName] = value;
    }
  },

  actions: {
    setusers(context) {
      axios
        .get("/api/v1/users")
        .then(response => {
          context.commit("users", { users: response.data });
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
