<template>
  <v-container>
    <v-layout style="background: #e5f4ec" column>
      <v-layout>
        <v-toolbar flat color="secondary">
          <h1 style="color:#3b5249">Dashboard</h1>
          <v-spacer></v-spacer>
          <router-link to="/wizard">
            <v-btn flat color="info">Add New Property</v-btn>
          </router-link>
        </v-toolbar>
      </v-layout>

      <div is="house-card" v-for="house in houseList" v-bind:key="house.id" :house="house"></div>
    </v-layout>
  </v-container>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import HouseCard from "./HouseCard.vue";

export default {
  name: "Dashboard",
  components: {
    HouseCard
    // dropzone
  },
  data: () => ({
    // valid: false,
  }),
  computed: {
    houseList() {
      return this.$store.state.houses;
    }
  },
  mounted() {
    this.$store.dispatch("setHouses");
  }
};
</script>
 <style>
</style>