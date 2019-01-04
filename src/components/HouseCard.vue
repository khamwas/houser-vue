<template>
  <v-container>
    <v-flex xs12 m6 offset-m3>
      <v-card flat margin-top="15" color="success" dark>
        <router-link v-bind:to="/house/+house.id">
          <v-img v-bind:src="house.img" aspect-ratio="2.75"></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{house.property_name.toUpperCase()}}</h3>
              <div>
                {{house.address}}
                <br>
                {{house.city}}
                <br>
                {{house.state}}
                <br>
                {{house.zip}}
              </div>
            </div>
          </v-card-title>
        </router-link>

        <v-card-actions>
          <v-card-title style="color:#519872">Mortgage: ${{house.mortgage}}</v-card-title>
          <v-card-title style="color:#519872">Rent: ${{house.rent}}</v-card-title>
          <v-spacer></v-spacer>
          <router-link to="/">
            <v-btn v-if="this.$route.params.id" flat color="info">Go Back</v-btn>
          </router-link>
          <v-btn v-on:click="deleteHouse(house.id)" flat color="error">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
import Vue from "vue";
export default {
  name: "HouseCard",
  props: ["house"],
  methods: {
    deleteHouse: function(id) {
      this.$store.dispatch("deleteHouse", id).then(() =>
        this.$store.dispatch("setHouses").then(() => {
          if (this.$route.params.id) {
            this.$router.push("/");
          }
        })
      );
    }
  }
};
</script>
 <style>
</style>