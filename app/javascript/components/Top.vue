<template>
  <v-container text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12 class="text-center">
        <h1>新規登録</h1>
      </v-flex>
      <v-flex xs5 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
               <v-text-field :value="user.name" @input="updateParams($event, 'name')" label="ユーザー名"></v-text-field>
               <v-text-field :value="user.email" @input="updateParams($event, 'email')" label="メールアドレス"></v-text-field>
               <v-text-field type="password" :value="user.password" @input="updateParams($event, 'password')" label="パスワード"></v-text-field>
               <v-text-field type="password" :value="user.password_confirmation" @input="updateParams($event, 'password_confirmation')" label="パスワード"></v-text-field>
               <div class="text-center">
                 <v-btn color="info" class="ml-2" @click="submit(user)">登録</v-btn>
               </div>
            </v-form>
              <v-card-actions>
                <v-divider/>
              </v-card-actions>
              <v-card-text
                class="text-center"
              >
                会員登録はお済みですか？
              </v-card-text>
              <v-card-actions>
                <v-btn :to="{ name: 'Login' }" class="mx-auto px-4">ログインする</v-btn>
              </v-card-actions>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'Top',
    computed: {
      ...mapGetters ('user', [
        'user',
      ]),
      // user() {
      //   return {};
      // }
    },
    methods: {
      ...mapMutations('user', [
        'update',
      ]),
      updateParams(event, keyName) {
        this.$store.commit('update', { value: event.target.value, keyName })
      },
    }
  }
</script>

<style>
  h1 {
    text-align: center;
  }
</style>