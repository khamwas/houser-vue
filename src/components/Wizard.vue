<template>
  <v-container flat fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex s12 m8 md8>
        <v-card flat>
          <v-toolbar flat dark color="primary">
            <v-toolbar-title>Add New Listing</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-tooltip right>
              <v-btn v-on:click="goHome" slot="activator" :href="source" icon large target="_blank">
                <v-icon large>remove_circle</v-icon>
              </v-btn>
              <span>Cancel</span>
            </v-tooltip>
          </v-toolbar>
          <v-tabs v-model="active" color="primary" dark slider-color="secondary">
            <!-- <v-tab v-for="n in 3" :key="n" ripple>Step {{ n }}</v-tab> -->
            <v-tab :key="1" ripple>Step 1</v-tab>
            <v-tab :key="2" ripple>Step 2</v-tab>
            <v-tab :key="3" ripple>Step 3</v-tab>
            <!-- <v-tab-item v-for="n in 3" :key="n">
              <v-card flat>
                <v-card-text>{{ text }}</v-card-text>
              </v-card>
            </v-tab-item>-->
            <v-tab-item :key="1">
              <v-card flat>
                <v-card-text>
                  <v-form @submity.prevent="completeWizard">
                    <v-text-field
                      prepend-icon="home"
                      name="propertyname"
                      label="Property Name"
                      type="text"
                      v-model="property_name"
                    ></v-text-field>
                    <v-text-field
                      v-model="address"
                      prepend-icon="add_location"
                      name="address"
                      label="Address"
                      type="text"
                    ></v-text-field>
                    <v-text-field
                      v-model="city"
                      prepend-icon="location_city"
                      name="city"
                      label="City"
                      type="text"
                    ></v-text-field>
                    <v-text-field
                      v-model="state"
                      prepend-icon="outlined_flag"
                      name="state"
                      label="State"
                      type="text"
                    ></v-text-field>
                    <v-text-field
                      v-model="zip"
                      prepend-icon="add_location"
                      name="zip"
                      label="Zip Code"
                      type="number"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item :key="2">
              <v-card flat>
                <v-card-text>
                  <v-form @submity.prevent="completeWizard">
                    <v-img v-bind:src="img" aspect-ratio="2.75"></v-img>
                    <v-text-field
                      v-model="img"
                      prepend-icon="image"
                      name="image"
                      label="Image"
                      type="text"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item :key="3">
              <v-card flat>
                <v-form @submity.prevent="completeWizard">
                  <!-- <v-img v-bind:src="img" aspect-ratio="2.75"></v-img> -->
                  <v-card-title v-show="this.mortgage>0">Suggested Rent: ${{suggestedRent}}</v-card-title>
                  <v-text-field
                    v-model="mortgage"
                    prepend-icon="dollar-sign"
                    name="mortgage"
                    label="Mortgage"
                    type="number"
                  ></v-text-field>
                  <v-text-field
                    v-model="rent"
                    prepend-icon="calendar-alt"
                    name="rent"
                    label="Rent"
                    type="number"
                  ></v-text-field>
                </v-form>
              </v-card>
            </v-tab-item>
          </v-tabs>

          <v-card-actions>
            <v-btn @click="back" flat color="tertiary">back</v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="next" flat color="primary">
              <div v-show="this.active<2">next tab</div>
              <div v-show="this.active==2">submit</div>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Vue from "vue";

export default {
  name: "Wizard",
  components: {
    // dropzone
  },
  data: () => ({
    active: null,
    property_name: "",
    address: "",
    city: "",
    state: "",
    zip: 0,
    img:
      "http://cdn.shopify.com/s/files/1/1142/1104/products/property-placeholder_large.jpg?v=1500399370",
    mortgage: 0,
    rent: 0
  }),
  computed: {
    suggestedRent: function() {
      return this.mortgage * 1.25;
    }
  },
  methods: {
    next: function() {
      const active = parseInt(this.active);
      this.active = active < 2 ? active + 1 : this.completeWizard();
    },
    back: function() {
      const active = parseInt(this.active);
      this.active = active > 1 ? active - 1 : 0;
    },
    goHome: function() {
      this.$router.push("/");
    },
    completeWizard() {
      let newHouse = Object.assign(
        {},
        {
          property_name: this.property_name,
          address: this.address,
          city: this.city,
          state: this.state,
          zip: this.zip,
          img: this.img,
          mortgage: this.mortgage,
          rent: this.rent
        }
      );
      this.$store.dispatch("addHouse", newHouse).then(() =>
        this.$store.dispatch("setHouses").then(() => {
          this.$router.push("/");
        })
      );
    }
  }
};
</script>
 <style>
</style>