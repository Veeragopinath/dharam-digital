<template>
  <v-app>
    <v-img
      height="200"
      src="https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMG9jZWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    >
      <v-container fluid pa-0>
        <v-row align="center" justify="center" style="height: 100vh" dense>
          <v-col
            cols="12"
            lg="6"
            md="6"
            class="fill-height d-flex flex-column justify-center align-center"
          >
            <v-card
              class="ma-auto blue-grey darken-1 rounded-xl pa-6"
              color="#F2F2F2"
              max-width="auto"
              elevation="0"
            >
              <h2 class="mt-3 ml-4">Hi, {{ mobileNumber }}</h2>
              <v-card-text class="mt-4 text-h5 text-center">
                Thank you for giving us the opportunity to serve you.
              </v-card-text>
              <v-card-text class="mt-n5 text-h5 text-center">
                Have a great day!
              </v-card-text>

              <v-row class="d-flex justify-center my-3">
                <img src="~/assets/smile.png" />
              </v-row>

              <v-card-actions class="justify-center">
                <v-rating
                  :length="5"
                  hover
                  size="45"
                  value="5"
                  color="black"
                  background-color="grey lighten-1"
                ></v-rating>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  layout: "empty",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      mobileNumber: (state) => state.Mobilenumber,
    }),
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&family=Raleway:wght@700&family=Roboto:wght@500&display=swap"); /*BOLD*/

body {
  font-family: "Raleway", sans-serif;
}
</style>
