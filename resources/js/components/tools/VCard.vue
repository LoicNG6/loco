<template>
  <div>
    <v-card color="#392820" elevation="5" rounded="lg" height="350" dark>
      <v-container>
        <v-row justify="center">
          <v-col cols="auto">
            <slot name="img"></slot>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="auto">
            <slot name="title"></slot>
          </v-col>
        </v-row>
        <v-row><v-divider dark></v-divider></v-row>
        <v-row justify="center">
          <v-col cols="12">
            <slot name="description"></slot>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="8" justify-center style="text-align: center">
            <v-btn @click="goToSection()" width="130" color="#4e382f">
              <v-icon light> mdi-eye-outline </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <SectionsVue @close="section = false" :showSection="section"></SectionsVue>
  </div>
</template>
<style lang="scss" scoped>
  card {
    background: #392820;
  }
</style>
<script>
  import SectionsVue from "../Sections.vue";
  export default {
    components: {
      SectionsVue,
    },
    name: "v-own-card",
    props: {
      topic_id: Number,
    },
    data: () => {
      return {
        section: false,
      };
    },
    methods: {
      goToSection() {
        this.section = true;
        this.$router.push({
          name: "section",
          params: { id: this.topic_id },
        });
      },
    },
  };
</script>