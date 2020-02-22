import axios from "axios";

export default {
  state: {
    users: []
  },

  getters: {
    users(state) {
      return state.users;
    }
  },

  mutations: {
    users(state) {
      state.users = payload.users;
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
