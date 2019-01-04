<template>
  <v-app style="background: #afd4c0">
    <Header></Header>
    <v-content align-center>
      <router-view :key="$route.fullPath"></router-view>
    </v-content>
  </v-app>
</template>

<script>
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