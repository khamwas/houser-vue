<template>
  <v-app>
    <Header></Header>
    <v-content style="background: #afd4c0">
      <router-view :key="$route.fullPath"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
import Header from "./components/Header.vue";
import Dashboard from "./components/Dashboard.vue";
import House from "./components/House";
import Wizard from "./components/Wizard";
export default {
  name: "App",
  components: {
    Header,
    Dashboard,
    House,
    Wizard
  },
  methods: {
    delete: function(id) {
      this.$store
        .dispatch("deleteHouse(id)")
        .then(() => this.$store.dispatch("setHouses"));
    }
  },
  mounted() {
    this.$store.dispatch("setHouses");
  }
};
</script>