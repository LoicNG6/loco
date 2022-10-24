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
    <v-main class="background-color">
      <v-container fluid>
        <v-row>
          <v-col style="border: solid" cols="3" v-for="i in 10" :key="i">
            <v-card height="200" dark color="white"> hello </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
  export default {
    data: () => {
      return {
        drawer: false,
      };
    },
    mounted() {},
    methods: {
    
    },
  };
</script>
