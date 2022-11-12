<template>
  <v-container class="text">
    <v-row class="my-8">
      <v-col style="border: solid; text-align: center" class="title">
        the section
      </v-col>
    </v-row>
    <v-row>
      <v-col style="border: solid">
        <v-card height="500">
          <v-card-title>Section description</v-card-title>
        </v-card>
      </v-col>
      <v-col style="border: solid" cols="5">
        <v-row justify="space-around">
          <v-col cols="auto" style="border: solid">
            <v-card height="200" rounded="circle" width="200"> </v-card>
          </v-col>
          <v-col cols="auto" style="border: solid" justify-center >
            <v-card height="200" rounded="circle" width="200"> </v-card>
          </v-col>
        </v-row>
        <v-row justify="space-around" class="mt-8">
          <v-col cols="auto" style="border: solid" justify-center>
            <v-card height="200" rounded="circle" width="200"> </v-card>
          </v-col>
          <v-col cols="auto" style="border: solid">
            <v-card height="200" rounded="circle" width="200"> </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    props: {
      id: String,
      topic_title: String,
    },
    data: () => {
      return {
        sections: null,
      };
    },
    mounted() {
      console.log("on the section ", this.id);
      this.getSections();
    },
    methods: {
      getSections() {
        console.log("hello getSections");
        this.$axios
          .get("/api/sections/" + this.id)
          .then((res) => {
            this.sections = res.data.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    watch: {
      showSection: function () {
        this.dialog = this.showSection;
      },
    },
  };
</script>