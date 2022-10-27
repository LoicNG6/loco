<template>
  <v-app id="inspire">
    <v-navigation-drawer class="text" color="brown darken-3" dark permanent app>
      <v-list-item style="height: 63px; text-align: center">
        <v-list-item-content>
          <v-list-item-title class="text-h6">NGUESSIE Loïc</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav class="pa-0">
        <v-list-item-group v-model="selectedMenu">
          <v-list-item
            link
            v-for="(menu, m) in menus"
            :key="m"
            @click="changeMenu(menu.to)"
            :disabled="m == selectedMenu"
            style="height: 70px"
          >
            <v-list-item-icon style="position: relative; top: 20%">
              <v-icon> {{ menu.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                <span
                  :style="
                    m == selectedMenu
                      ? 'font-weight:bold; pointer-events: none'
                      : ''
                  "
                  class="text"
                  >{{ menu.title }}</span
                >
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-divider style="position: relative; top: 50%"></v-divider>

      <v-btn
        color="brown darken-4"
        rounded
        height="100"
        x-large
        elevation="4"
        style="position: relative; top: 52%; left: 5%"
      >
        <v-row align="center">
          <v-col cols="auto">
            <v-btn :to="{ name: 'admin' }" color="" icon elevation="3" x-large>
              <v-icon dark x-large>mdi-account-circle</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="6"> Admin </v-col>
        </v-row>
      </v-btn>
    </v-navigation-drawer>

    <v-app-bar color="brown darken-3" dark app>
      <v-row align-content="center" justify="space-between">
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

    <v-main class="background-color pa-0">
      <slot name="contain"></slot>
    </v-main>
  </v-app>
</template>
<script>
  export default {
    data: () => {
      return {
        menus: [
          {
            positon: 0,
            title: "Home",
            icon: "mdi-home",
            to: "home",
          },
          {
            positon: 1,
            title: "Contact me",
            icon: "mdi-message-text",
            to: "contact-me",
          },
          {
            positon: 2,
            title: "About",
            icon: "mdi-information-outline",
            to: "information",
          },
        ],
        selectedMenu: null,
      };
    },
    methods: {
      changeMenu(route_name) {
        console.log(route_name);
        // return this.$router.push({ name: route_name });
      },
    },
  };
</script>
