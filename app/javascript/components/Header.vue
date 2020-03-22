<template>
  <header id="header">
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="formSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link
          :to="{ name: 'Top' }"
        >
          sabotask
        </router-link>
      </v-toolbar-title>
      <v-toolbar-items v-if="loginStatus">
        <v-btn text 
        @click="logout(users[0], $router.push({name: 'Top'}))"
        >ログアウト</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </header>
</template>

<script>
import { mapActions,mapMutations,mapGetters } from 'vuex'
import FormSideMenuVue from './form/FormSideMenu.vue'

  export default {
    name: 'Header',
    created () {
    },
    methods: {
      ...mapActions('user', [
        'logout',
      ]),
      //ストアの再度メニューの表示・非表示の管理
      ...mapMutations('user', [
        'formSideMenu',
      ]),
      //再度メニューのdrawerを取得
      ...mapGetters ('user', [
        'sideDrawer',
      ]),
      ...mapGetters('sessions', [
        'loginStatus',
      ]),
    },
    computed: {
      ...mapGetters ('user', [
        'users',
      ]),
    }
  }
</script>