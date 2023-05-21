<template>
  <v-card  variant="tonal" color="transparent">
    <v-card-title style="font-size: 30px; text-decoration: underline;">
      UPB Canteen
    </v-card-title>
  </v-card>
</template>

<script>
import api from "../components/backend-api.js";

export default {
  name: "userPage",
  data() {
    return {
      UserInfo: [],
      firstName: "",
      lastName: "",
      email: ""
    };
  },

  methods: {
    displayUser() {
      this.firstName = this.UserInfo.firstName;
      this.lastName = this.UserInfo.lastName;
      this.email = this.UserInfo.email;
    }
  },
  beforeCreate() {
    // api
    //   .getUserWithoutId()
    //   .then(response => {
    //     console.log(response.data);
    //     this.firstName = response.data.firstName;
    //     this.lastName = response.data.lastName;
    //     this.email = response.data.email;
    //   })
    //   .catch(error => {
    //     this.errors.push(error);
    //   });
  }
};
</script>
<style>
::-webkit-scrollbar {
  width: 0;
  background: yellow;
  display: inline !important;
}
.pass_show {
  position: relative;
}
.pass_show .ptxt {
  position: absolute;
  top: 50%;
  right: 10px;
  z-index: 1;
  color: #f36c01;
  margin-top: -10px;
  cursor: pointer;
  transition: 0.3s ease all;
}
.pass_show .ptxt:hover {
  color: #333333;
}
</style>
