<template>
  <v-layout row justify-center>
    <FormSidemenu />
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
                <v-text-field :value="user.name" @input="updateParams($event, 'name')" label="ユーザー名"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field :value="user.email" @input="updateParams($event, 'email')" label="メールアドレス"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field type="password" :value="user.password" @input="updateParams($event, 'password')" label="パスワード"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" @click="dialog = false" dark>更新</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapActions,mapMutations,mapGetters } from 'vuex'
import FormSidemenu from './FormSideMenu'

export default {
  components: {
    FormSidemenu
  },
  data() {
    return {
      dialog: false,
      loading: true,
    }
  },
  created () {
  },
    methods: {
      ...mapMutations('user', [
        'update',
      ]),
      //store内のステートの情報を取得
      updateParams(event, keyName) {
        this.update({ value: event, keyName })
      },
    },
    computed: {
      ...mapGetters ('user', [
        'users',
      ]),
      user() {
        return this.users[0]
      }
    },
}
</script>
