<template>
  <v-container fluid v-if="$route.name == 'home'">
    <v-row>
      <v-col cols="3" v-for="(topic, index) in topics" :key="index">
        <v-card color="#392820" elevation="5" rounded="lg" height="350" dark>
          <v-container>
            <v-row justify="center">
              <v-col cols="auto">
                {{ topic.img }}
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="auto">
                {{ topic.title }}
              </v-col>
            </v-row>
            <v-row><v-divider dark></v-divider></v-row>
            <v-row justify="center">
              <v-col cols="12">
                {{ topic.description }}
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="8" justify-center style="text-align: center">
                <v-btn @click="goToSection(topic)" width="130" color="#4e382f">
                  <v-icon light> mdi-eye-outline </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <router-view v-else />
</template>
<script>
  export default {
    data: () => {
      return {
        topics: null,
      };
    },
    mounted() {
      this.getTopics();
    },
    methods: {
      getTopics() {
        this.$axios
          .get("/api/topics")
          .then((res) => {
            this.topics = res.data.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      goToSection(topic) {
        this.$router.push({
          name: "section",
          params: {
            id: topic.id,
            topic_title: topic.title,
          },
        });
      },
    },
  };
</script>
