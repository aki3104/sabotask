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
                  @click="login"
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
import { mapGetters, mapMutations } from 'vuex'
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
    updateParams(event, keyName) {
      this.update({ value: event, keyName })
    },
    login() {
      user = this.users[0]
      console.log(user)
      axios
        .post('/api/v1/login', user)
        .then(response => {
          context.commit("users", { users: response.data });
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
}
</script>