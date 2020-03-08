<template>
  <v-container text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12 class="text-center">
        <h1>プロフィール確認</h1>
      </v-flex>
      <v-flex xs5 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
               <v-text-field ></v-text-field>
               <v-text-field :value="user.email" @input="updateParams($event, 'email')" label=""></v-text-field>
               <v-text-field type="password" :value="user.password" @input="updateParams($event, 'password')" label="パスワード"></v-text-field>
               <div class="text-center">
                 <!-- 後でusers#createに繋がるactionをuser.jsに作成 -->
                 <v-btn color="info" class="ml-2" @click="edit(user)">変更</v-btn>
               </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import FormUseredit from '../form/FormUseredit'

export default {
  name: 'loginUser',
  components: {
    FormUseredit,
  },
  data () {
    return {
      FormUseredit: false,
    }
  },
  created () {
  },
  methods: {
  },
  computed: {
    loginUserName: function () {
      return this.$store.state.users[0]
    },
  }
}
</script>