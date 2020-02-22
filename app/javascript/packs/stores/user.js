import axios from "axios";

export default {
  namespaced: true,

  state: {
    users: [{}],
  },

  getters: {
    users(state) {
      return state.users;
    }
  },

  mutations: {
    users(state) {
      state.users = payload.users;
    },
    update(state, { value, keyName }) {
      const user = state.users[0]
      user[keyName] = value
    }
  },

  actions: {
    // users#indexと紐づく
    setusers(context) {
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
    create(context) {
      const user = context.state.users[0]
      axios.post('/api/v1/users', user)
        .then(response => {
          context.commit('users', {users: response.data})
        })
        .catch(error => {
          console.error(error)
      })
    }
  }
};
