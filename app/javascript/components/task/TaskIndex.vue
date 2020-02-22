<template>
  <v-container text-xs-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>タスク一覧</h1>
      </v-flex>
      <v-flex xs12 mt-5 text-xs-right>
        <router-link :to="{name: 'TaskNew'}">
          <v-btn color="info">タスクの追加</v-btn>
        </router-link>
      </v-flex>
      <v-flex xs12 mt-5 justify-center>
        <v-data-table :headers='headers' :items='tasks'>
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.task }}</td>
            <v-icon small class="mr-2" @click="delete()>mdi-delete</v-icon>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  created () {
  },
  methods: {
  ...mapActions( 'task', [
    'delete',
  ])
  }
}

</script>