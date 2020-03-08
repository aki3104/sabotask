import axios from "axios";

export default {
  namespaced: true,
  state: {
    tasks: [{}],
    headers: [{
      text: 'タスク',
      value: 'task' 
    },
  ],
  },

  getters: {
    tasks(state) {
      return state.tasks;
    }
  },

  mutations: {
    tasks(state) {
      state.tasks = payload.tasks;
    },

    // 各フォームの値をVuexストアに渡す
    update(state, { value, keyName }) {
      const task = state.tasks[0]
      task[keyName] = value
    }
  },

  actions: {
    // tasks#indexと紐づく
    index(context) {
      axios
        .get("/api/v1/tasks")
        .then(response => {
          context.commit("tasks", { tasks: response.data });
        })
        .catch(error => {
          console.error(error);
        });
    },

    // tasks#createと紐づく
    create(context) {
      alert('タスクが作成される（デモ）')
      const task = context.state.tasks[0]
      axios.post('/api/v1/tasks', task)
        .then(response => {
        context.commit('tasks', response.data)
        })
        .catch(error => {
        console.error(error)
      })
    }
  }
};