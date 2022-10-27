<template>
  <v-card color="#392820" elevation="5" rounded="lg" height="300" dark>
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
        <v-col
          cols="8"
          justify-center
          style="text-align: center"
        >
          <v-btn width="130" color="brown">
            <v-icon light> mdi-eye-outline </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<style lang="scss" scoped>
  card {
    background: #392820;
  }
</style>
<script>
  export default {
    name: "v-own-card",
  };
</script>