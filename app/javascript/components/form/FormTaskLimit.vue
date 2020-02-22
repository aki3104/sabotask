<template>
  <v-text-field
    :value="task.limit"
    @input="updateParams($event, 'limit')"
    label="期限"
  ></v-text-field>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "FormTaskContent",
  computed: {
    ...mapGetters("task", ["tasks"]),
    task() {
      return this.tasks[0];
    }
  },
  methods: {
    ...mapMutations("task", ["update"]),
    updateParams(event, keyName) {
      this.update({ value: event, keyName });
    }
  }
};
</script>