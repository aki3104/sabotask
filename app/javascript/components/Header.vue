<template>
  <header id="header">
    <v-app-bar>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
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
  export default {
    name: 'Header',
  }
</script>