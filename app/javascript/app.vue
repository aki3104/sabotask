<template>
  <v-app id="app">
    <Header></Header>
    <p>{{ message }}</p>
    <TaskNew></TaskNew>
    <Top></Top>
  </v-app>
</template>

<script>
import Header from "./components/Header"
import TaskNew from "./components/task/TaskNew"
import Top from "./components/Top"

export default {
  data: function () {
    return {
      message: "Hello Vue!"
    }
  },
  components: {
    Header,
    TaskNew,
    Top,
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
