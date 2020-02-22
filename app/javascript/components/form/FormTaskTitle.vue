<template>
  <v-text-field
    :value="task.title"
    @input="updateParams($event, 'title')"
    label="タイトル"
  ></v-text-field>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'FormTaskTitle',
  computed: {
    ...mapGetters('task', [
      'tasks'
      ]),
    task() {
      return this.tasks[0]
    },
  },
  methods: {
    ...mapMutations('task', [
      'update'
    ]),
    updateParams(event, keyName) {
      this.update({ value: event, keyName })
    },
  },
}
</script>