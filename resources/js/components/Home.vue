<template>
  <v-app>
    <v-main class="background-color pa-0">
      <v-container fluid>
        <v-row justify="space-around">
          <v-col cols="2" v-for="(topic, index) in topics" :key="index">
            <v-own-card>
              <template v-slot:title>
                {{ topic.title }}
              </template>
              <template v-slot:description>
                {{ topic.description }}
              </template>
            </v-own-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
  import axios from "axios";
  import VOwnCard from "./tools/VCard.vue";

  export default {
    components: {
      VOwnCard,
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
      changeDrawer() {
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
