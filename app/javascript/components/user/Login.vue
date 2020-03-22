<template>
  <v-container text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12 class=“text-center”>
        <h1>ログイン</h1>
      </v-flex>
      <v-flex xs5 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
               <v-text-field :value="user.email" @input="updateParams($event, 'email')" label="メールアドレス"></v-text-field>
               <v-text-field type="password" :value="user.password" @input="updateParams($event, 'password')" label="パスワード"></v-text-field>
               <div class=“text-center”>
                 <v-btn
                  :to="{ name: 'Login' }"
                  @click="login(users[0], $router.push('/'))"
                  >ログイン</v-btn>
               </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import axios from 'axios'

export default {
  name: 'Login',
  computed: {
    ...mapGetters('user', [
      'users',
    ]),
    user() {
      return this.users[0]
    }
  },
  methods: {
    ...mapMutations('user', [
      'update',
    ]),
    ...mapActions('user', [
      'login',
    ]),
    updateParams(event, keyName) {
      this.update({ value: event, keyName })
    },
  },
}
</script>