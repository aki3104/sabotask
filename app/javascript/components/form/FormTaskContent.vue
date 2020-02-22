<template>
  <v-text-field
    :value="task.content"
    @input="updateParams($event, 'content')"
    label="内容"
  ></v-text-field>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'FormTaskContent',
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