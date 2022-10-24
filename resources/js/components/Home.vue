<template>
  <v-app class="main">
    <v-navigation-drawer v-model="drawer" app> </v-navigation-drawer>
    <v-app-bar color="brown darken-3" dark app>
      <v-row align-content="center" justify="space-between">
        <v-col cols="auto" @click="drawer = !drawer">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </v-col>
        <v-col cols="auto">
          <v-toolbar-title> <h3>Loco</h3></v-toolbar-title>
        </v-col>
        <v-col cols="auto">
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main class="main">
      <v-container class="main" fluid>
        <v-row>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
  export default {
    data: () => ({
      drawer: null,
    }),
  };
</script>
