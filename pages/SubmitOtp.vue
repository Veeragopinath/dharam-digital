<template>
  <v-app class="black">
    <v-img
      height="300"
      src="https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMG9jZWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    >
      <v-card
        class="ma-auto blue-grey darken-1 rounded-xl pa-6 mt-16"
        color="#F2F2F2"
        max-width="400"
        elevation="0"
      >
        <v-card-title>
          <v-flex>
            <v-row class="d-flex justify-center"><h2>Dharam Digital</h2> </v-row>
          </v-flex>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="my-2">
          <h3>Enter the otp sent to your mobile</h3>
          <v-form ref="form">
            <v-otp-input length="4" v-model="otp"></v-otp-input>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="d-flex justify-center">
          <v-btn class="black white--text" @click="submitOtp"> submit </v-btn>
        </v-card-actions>
      </v-card>
    </v-img>
  </v-app>
</template>

<script>
import { rules } from "~/helpers/formValidation.js";
import { mapState, mapActions } from "vuex";
import { endpoints } from "~/constants/endpoints";

export default {
  layout: "empty",
  data() {
    return {
      otp: "",
    };
  },

  methods: {
    ...mapActions(["submitOtpDetails"]),
    submitOtp() {
      this.submitOtpDetails(this.otp).then((res) => {
        if (res.status === "success") {
          alert("Otp submitted successfully");
          this.$router.push({
            path: "/ThankYou",
            query: {
              step: 3,
            },
          });
        } else {
          alert("an error occured");
        }
      });
    },
  },
};
</script>
<style>
/* html {
      overflow: hidden;
    } */
.form {
  width: 320px;
  margin: 0px 40px;
}
.black {
  background-color: darkgrey;
}

.login {
  margin-top: 20px;
}
.V-otp-input {
  position: absolute;
  width: 35px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}
#text {
  /* margin-top: 100px;
    margin-left: 56px;
    margin-bottom: 40px; */
  min-height: 30%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  font-size: 30px;
  margin-left: 40px;
}
/* 960px > < 1264px* */
@media screen and (min-width: 850px) and (max-width: 2000px) {
  .imgContent {
    display: flex;
    justify-content: center;
    height: 100vh;
  }
}
@media screen and (max-width: 850px) {
  .imgContent {
    display: none;
  }
}
</style>
