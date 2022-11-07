<template>
  <div class="text-center">
    <v-dialog v-model="dialogOnChange" width="1000">
      <v-card height="800" color="#392820">
        <v-card-title class="text-h5 grey lighten-2">
          Section.title
        </v-card-title>
        <v-card-text> section.contain </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    props: {
      showSection: Boolean,
    },
    data: () => {
      return {
        dialog: false,
      };
    },
    computed: {
      dialogOnChange: {
        get() {
          return this.dialog;
        },
        set(value) {
          this.dialog = false;
          if (this.dialog == false) this.getBack();
        },
      },
    },
    mounted() {
      this.dialogOnChange = false;
    },
    methods: {
      getBack() {
        this.$router.push({ name: "home" });
        this.$emit("close");
      },
    },
    watch: {
      showSection: function () {
        this.dialog = this.showSection;
      },
    },
  };
</script>