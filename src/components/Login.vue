<template>
  <div id="login">
    <v-app id="login">
      <v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
        <div>
          <v-tabs
            v-model="tab"
            show-arrows
            background-color="#FFA535BF"
            icons-and-text
            dark
            grow
          >
            <v-tabs-slider color="orange darken-4"></v-tabs-slider>
            <v-tab v-for="i in tabs" :key="i">
              <v-icon large>{{ i.icon }}</v-icon>
              <div class="caption py-1">{{ i.name }}</div>
            </v-tab>
            <v-tab-item>
              <v-card class="px-4">
                <v-card-text>
                  <v-form id="login_form" v-model="isFormValid" lazy-validation>
                    <v-row>
                      <v-col cols="12" style="padding-bottom: 0;">
                        <v-text-field
                          v-model="email"
                          :rules="emailRules"
                          label="Email"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="password"
                          :append-icon="show1 ? 'eye' : 'eye-off'"
                          :rules="passwordRules"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Password"
                          hint="At least 8 characters"
                          counter
                          @click:append="show1 = !show1"
                        ></v-text-field>
                      </v-col>
                      <v-col class="d-flex" cols="12" sm="6" xsm="12"> </v-col>
                      <v-spacer></v-spacer>
                      <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                        <v-btn
                          x-large
                          block
                          :disabled="!isFormValid"
                          color="orange"
                          @click="loginFunc()"
                        >
                          Login
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card class="px-4">
                <v-card-text>
                  <v-form ref="registerForm" v-model="valid" lazy-validation>
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="username"
                          :rules="[rules.required]"
                          label="Username"
                          maxlength="20"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="email"
                          :rules="emailRules"
                          label="E-mail"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="password"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required, rules.min]"
                          :type="show1 ? 'text' : 'password'"
                          label="Password"
                          hint="At least 8 characters"
                          counter
                          @click:append="show1 = !show1"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          block
                          v-model="verify"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required, passwordMatch]"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Confirm Password"
                          counter
                          @click:append="show1 = !show1"
                        ></v-text-field>
                      </v-col>
                      <v-spacer></v-spacer>
                      <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                        <v-btn
                          x-large
                          block
                          :disabled="!valid"
                          color="orange"
                          @click="registerUser()"
                          >Register</v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </div>
      </v-dialog>
    </v-app>
  </div>
</template>

<script>
import api from "../components/backend-api";
export default {
  name: "Login",
  data: () => ({
    dialog: true,
    tab: 0,
    tabs: [
      { name: "Login", icon: "mdi-account" },
      { name: "Register", icon: "mdi-account-outline" }
    ],
    valid: true,
    username: "",
    verify: "",
    loginPassword: "",
    loginEmail: "",
    loginEmailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    show1: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => (v && v.length >= 8) || "Min 8 characters"
    },
    email: "",
    emailRules: [
      v => !!v || "Email is required",
      v => /.+@.+\..+/.test(v) || "Email must be valid",
      v => (v && v.length <= 100) || "Email must be less than 10 characters"
    ],
    password: "",
    passwordRules: [
      v => !!v || "Password is required",
      v => (v && v.length <= 100) || "Password must be less than 10 characters"
    ],
    isFormValid: false
  }),
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    }
  },
  methods: {
    registerUser() {
      console.log();
      api
        .add_user({
          email: this.email,
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.$router.push("/");
        })
        .catch(error => {
          console.log(error);
        });
    },
    loginFunc() {
      this.$store
        .dispatch("login", { email: this.email, password: this.password })
        .then(() => {
          this.$router.push("/").catch(err => {
            console.log(err);
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style>
#login {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  background-color: #f29625;
  display: flex;
  align-items: center;
  background-image: url("../assets/pexels-lukas-616401.png") !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  background-size: cover !important;
}
</style>
