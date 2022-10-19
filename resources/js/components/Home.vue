<template>
  <v-main class="main">
    <div class="container">
      <h1>
        <span class="typed-text">{{ typeValue }}</span>
        <span class="blinking-cursor">|</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </h1>
    </div>
  </v-main>
</template>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 6rem;
    font-weight: normal;
    span.typed-text {
      color: white;
    }
  }

  // Cursor blinking CSS Starts...
  .blinking-cursor {
    font-size: 6rem;
    color: #2c3e50;
    -webkit-animation: 1s blink step-end infinite;
    -moz-animation: 1s blink step-end infinite;
    -ms-animation: 1s blink step-end infinite;
    -o-animation: 1s blink step-end infinite;
    animation: 1s blink step-end infinite;
  }
  @keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: #2c3e50;
    }
  }
  @-moz-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: #2c3e50;
    }
  }
  @-webkit-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: #2c3e50;
    }
  }
  @-ms-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: #2c3e50;
    }
  }
  @-o-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: #2c3e50;
    }
  }
</style>

<script>
  export default {
    data: () => {
      return {
        typeValue: "",
        typeStatus: false,
        displayTextArray: ["Hi,", " I'm Loïc NGUESSIE,", "welcome to my page !"],
        typingSpeed: 100,
        newTextDelay: 2000,
        displayTextArrayIndex: 0,
        charIndex: 0,
      };
    },
    mounted() {
      console.log("component mounted");
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    },
    methods: {
      typeText() {
        if (
          this.charIndex <
          this.displayTextArray[this.displayTextArrayIndex].length
        ) {
          if (!this.typeStatus) this.typeStatus = true;
          this.typeValue += this.displayTextArray[
            this.displayTextArrayIndex
          ].charAt(this.charIndex);
          this.charIndex += 1;

          setTimeout(this.typeText, this.typingSpeed);
        } else {
          this.charIndex = 0;
          this.displayTextArrayIndex += 1;
          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      },
      // },
    },
  };
</script>
  