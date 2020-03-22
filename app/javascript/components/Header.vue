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
    </v-app-bar>
  </header>
</template>

<script>
import { mapMutations,mapGetters } from 'vuex'
import FormSideMenuVue from './form/FormSideMenu.vue'

  export default {
    name: 'Header',
    created () {
    },
    methods: {
      ...mapMutations('user', [
        'formSideMenu',
      ]),
      //再度メニューのdrawerを取得
      ...mapGetters ('user', [
        'sideDrawer',
      ]),
    }
  }
</script>