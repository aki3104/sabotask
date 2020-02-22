import axios from "axios";

export default {
  state: {
    tasks: []
  },

  getters: {
    tasks(state) {
      return state.tasks;
    }
  },

  mutations: {
    tasks(state) {
      state.tasks = payload.tasks;
    }
  },

  actions: {
    setTasks(context) {
      axios
        .get("/api/v1/tasks")
        .then(response => {
          context.commit("tasks", { tasks: response.data });
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
