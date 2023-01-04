<template>
  <v-app>
    <v-card color="blue-grey darken-1" dark>
      <v-img height="200" src="https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg">
        <v-row class="pa-4 mt-8">
          <v-col md="6" class="d-flex justify-center">
            <h1 class="text-h3">Dharam Digital</h1>
            <h4 class="grey--text text--lighten-1">
              {{ country_code }} - <bold> INDIA</bold>
            </h4>
          </v-col>

          <v-col md="4" class="d-flex flex-column">
            <v-text-field v-model="mobileNo" solo> </v-text-field>
            <v-btn class="pa-2 blue-grey darken-1" @click="submitMobileNo"> Submit</v-btn>
          </v-col>
        </v-row>
      </v-img>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="4" v-for="(carrier, key) in carriers" :key="carrier">
              <v-card class="mx-auto my-12" max-width="374">
                <v-img
                  cover
                  height="250"
                  src="https://pbs.twimg.com/media/CibBK_0WgAENDOC?format=jpg&name=small"
                ></v-img>

                <v-card-item>
                  <v-card-title>{{ key }}</v-card-title>

                  <v-card-subtitle>
                    <span class="mr-1">{{ carrier.product_name }}</span>

                    <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
                  </v-card-subtitle>
                </v-card-item>

                <v-card-text>
                  <v-row align="center" class="mx-0">
                    <v-rating
                      :model-value="4.5"
                      color="amber"
                      density="compact"
                      half-increments
                      readonly
                      size="40"
                    ></v-rating>

                    <div class="text-grey ms-4">4.5 (413)</div>
                  </v-row>

                  <div class="my-4 text-subtitle-1">
                    <span class="mdi mdi-database"></span> {{ carrier.currency }}-{{
                      carrier.price
                    }}
                  </div>

                  <div>
                    By subscribing to the service , you are accepting all Terms &amp;
                    Conditions of the service &amp; authorize STC to share your mobile
                    number with our partner (Quick Heal),who manages this subscription
                    service
                  </div>
                </v-card-text>

                <v-divider class="mx-4 mb-1"></v-divider>

                <v-card-title
                  >Available Plans -- ( plan ID - {{ carrier.plan_id }})
                </v-card-title>

                <div class="px-4">
                  <v-chip-group v-model="selection">
                    <div v-for="plan in carrier.available_plans" :key="plan">
                      <v-chip>{{ plan }}</v-chip>
                    </div>
                  </v-chip-group>
                </div>

                <v-card-actions>
                  <v-btn color="deep-purple-lighten-2" variant="text"
                    >Period Days {{ carrier.period_days }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  auth: false,
  layout: "empty",
  data() {
    return {
      carriers: {},
      mobileNo: "",
    };
  },

  mounted() {
    this.$route.query.step = 1;
    this.initialize();
  },
  methods: {
    ...mapActions(["getPLanDetails", "sentOtp"]),
    initialize() {
      this.getPLanDetails().then((res) => {
        debugger;
        this.fullDetails = res;
        this.carriers = res.carriers;
        this.country_code = res.country_code;
        // this.terms = Object.values(carriers)[0];
      });
    },
    submitMobileNo() {
      this.sentOtp(this.mobileNo).then((res) => {
        debugger;
        if (res.status === "success") {
          alert("Otp sent successfully");
          this.$router.push({
            path: "/SubmitOtp",
            query: {
              step: 2,
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

.login {
  margin-top: 20px;
}

#text {
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
