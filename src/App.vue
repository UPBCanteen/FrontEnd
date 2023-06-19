<template>
  <!--  <div id="app">-->
  <v-app id="app">
    <UserMenuBar />
    <!-- <AdminMenuBar v-if="$store.state.role === 'USER'"/> -->
    <!-- <EmployeeMenuBar /> -->
    <router-view />
  </v-app>
  <!--  </div>-->
</template>

<script>
// import AdminMenuBar from "./views/AdminMenuBar";
// import EmployeeMenuBar from "./views/EmployeeMenuBar";
import UserMenuBar from "./views/UserMenuBar";
export default {
  name: "App",
  components: {
    // AdminMenuBar,
    // EmployeeMenuBar,
    UserMenuBar
  },
  data: () => ({
    role: localStorage.getItem("role")
  }),
  methods: {},
  beforeCreate() {
    this.$store.state.role = localStorage.getItem("role");
  }
};
</script>

<style>
#app {
  background-image: url('assets/output-onlinepngtools (1).png') !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  background-size: cover !important;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(255, 165, 52, 0.75);
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
}

</style>
