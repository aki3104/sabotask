<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Profile</v-btn>
      </template>
      <v-card :loading="loading">
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="ユーザー名" required :placeholder="users[0].name"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email*" required :placeholder="users[0].email"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required :placeholder="users[0].password"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false" dark>キャンセル</v-btn>
          <v-btn color="blue darken-1" flat @click="userUpdate" dark>更新</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      dialog: false,
      loading: true,
    }
  },
  created () {
    console.log(this.users)
  },
  methods: {
    userUpdate() {
      alert('次回更新アクションを追加する')
    },
  },
  computed: {
    ...mapGetters('user', [
      'users',
    ]),
  
  }
}
</script>
