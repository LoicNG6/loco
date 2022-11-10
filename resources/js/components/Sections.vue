<template>
  <v-container> in the section </v-container>
</template>
<script>
  export default {
    props: {
      id: Number,
    },
    mounted(){
      console.log(this.id);
      this.$forceUpdate;
    },
    methods: {
      getSections() {
        console.log("topic id = ", this.route.params.id);
        // axios
        //   .get("api/sections/" + this.route.params.id)
        //   .then((res) => {
        //     this.section = res.data.data;
        //   })
        //   .catch((error) => {
        //     console.log(error)
        //   });
      },
    },
    watch: {
      showSection: function () {
        this.dialog = this.showSection;
      },
    },
  };
</script>