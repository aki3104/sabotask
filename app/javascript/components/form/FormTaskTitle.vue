<template>
  <v-text-field
    :value="task.title"
    @input="updateParams($event, 'name')"
    label="タイトル"
  ></v-text-field>
</template>

<script>
export default {
  name: 'FormTaskTitle',
  props: {
    task: Object,
  },
  computed: {
    ...mapGetters('task', [
      'tasks'
      ]),
    task() {
      return this.tasks[0]
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
}
</script>