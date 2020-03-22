<template>
  <v-container fluid fill-height>
    <v-navigation-drawer :value="sideDrawer" absolute temporary>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="../../public/img/sabotask.gif">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>sabotask</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' },
      ]
    }
  },
  computed: {
  //サイドメニューのdrawerを取得
  ...mapGetters ('user', [
    'sideDrawer',
  ])
  }
}
</script>