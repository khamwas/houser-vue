<template>
  <v-toolbar app>
    <router-link to="/">Houser</router-link>
  </v-toolbar>
</template>

<script>
import Vue from "vue";
import axios from "axios";

export default {
  name: "House",
  components: {
    // dropzone
  },
  data: () => ({
    // valid: false,
  }),
  methods: {}
};
</script>
 <style>
a {
  text-decoration: none;
}
</style>