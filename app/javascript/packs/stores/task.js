import axios from "axios";

export default {
  namespaced: true,
  state: {
    task: {},
    tasks: [],
  },

  getters: {
    task(state) {
      return state.task;
    },
    tasks(state) {
      return state.tasks;
    }
  },

  mutations: {
    task(state) {
      state.tasks = payload.task;
    },
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
