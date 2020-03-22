import axios from "axios";

export default {
  namespaced: true,

  state: {
    users: [{}]
  },

  getters: {
    users(state) {
      return state.users;
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
          context.dispatch("task/index", null, { root: true }); 
          routeTo
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
  
};
