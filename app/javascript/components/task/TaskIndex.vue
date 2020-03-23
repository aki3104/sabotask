<template>
  <v-container text-xs-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>タスク一覧</h1>
      </v-flex>
      <v-flex xs12 mt-5 text-xs-right>
      <div class=“text-center”>
        <FormSideMenu />
        <UserEdit/>
      </div>
      <v-btn :to= "{name: 'TaskNew'}" color="info">タスクの追加</v-btn>
      </v-flex>
      <v-flex xs12 mt-5 justify-center>
        <!-- <v-data-table :headers='headers' :items='tasks'> -->
          <!-- <template v-slot:items="props"> -->
            <div v-for="(task, index) in tasks" :key="index">
              <v-text>
                {{task}}
              </v-text>
              <!-- <td class="text-xs-left">{{ props.item.task }}</td> -->
              <!-- <v-icon small class="mr-2" @click="delete">mdi-delete</v-icon> -->
            </div>
          <!-- </template> -->
        <!-- </v-data-table> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import UserEdit from '../form/FormUserEdit'
import FormSideMenu from '../form/FormSideMenu'

export default {
  components: {
    UserEdit,
    FormSideMenu
  },
  computed: {
    ...mapGetters( 'task', [
      'tasks',
    ]),
  },
  methods: {
  ...mapActions( 'task', [
    'delete',
  ])
  }
}
</script>