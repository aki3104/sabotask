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
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="loginned">
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
      //ストアのサイドメニューの表示・非表示の管理
      ...mapMutations('user', [
        'formSideMenu',
      ]),
      //サイドメニューのdrawerを取得
      ...mapGetters ('user', [
        'sideDrawer',
      ]),
    },
    computed: {
      ...mapGetters ('user', [
        'users',
      ]),
      ...mapGetters('session', [
        'loginned',
      ]),
    }
  }
</script>