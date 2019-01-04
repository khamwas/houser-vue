<template>
  <v-container>
    <div is="house-card" v-for="house in currentHouse" v-bind:key="house.id" :house="house"></div>
  </v-container>
</template>

<script>
import Vue from "vue";
import HouseCard from "./HouseCard.vue";

export default {
  name: "House",
  components: {
    HouseCard
  },
  computed: {
    currentHouse() {
      return this.$store.state.houses.filter(
        house => house.id == this.$route.params.id
      );
    }
  }
};
</script>
 <style>
</style>