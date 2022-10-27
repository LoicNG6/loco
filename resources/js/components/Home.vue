<template>
  <v-app>
    <v-main class="background-color pa-0">
      <v-app-bar color="brown darken-3" dark app>
        <v-row align-content="center" justify="space-between">
          <v-col cols="auto" @click="changeDrawer">
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
      
      <v-container fluid style="border:solid">
        <v-row justify="space-around">
          <v-col cols="2" v-for="(topic, index) in topics" :key="index">
            <vOwnCard>
              <template v-slot:title>
                {{ topic.title }}
              </template>
              <template v-slot:description>
                {{ topic.description }}
              </template>
            </vOwnCard>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
  import axios from "axios";
  import vOwnCard from "./tools/VCard.vue";

  export default {
    components: {
      vOwnCard,
    },
    data: () => {
      return {
        drawer: false,
        topics: null,
      };
    },
    mounted() {
      this.getTopics();
    },
    methods: {
      changeDrawer(){
        this.drawer = !this.drawer;
      },
      getTopics() {
        axios
          .get("/api/topics")
          .then((res) => {
            this.topics = res.data.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      goToSection() {
        this.router.push({ name: "" });
      },
    },
  };
</script>
