<template>
  <Slide open-on-hover>
    <UserPage />
    <a style="text-decoration: none;" href="/">
      <span>Acasa</span>
    </a>
    <a style="text-decoration: none;" href="/cafeteriaPage">
      <span>Cantine</span>
    </a>
    <a style="text-decoration: none;" href="/userPageAdmin">
      <span>Utilizatori</span>
    </a>
    <a style="text-decoration: none;" href="#" v-on:click="logout()">
      <span>Logout</span>
    </a>
  </Slide>
</template>

<script>
import { Slide } from "vue-burger-menu";
import UserPage from "./UserPage";
export default {
  name: "AdminMenuBar",
  components: {
    Slide,
    UserPage
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout", {});
      this.$router.go();
    }
  }
};
</script>

<style>
.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  padding: 0%;
  padding-left: 0%;
  background-color: rgba(255, 165, 52, 1); /*#bd711b;*/
  overflow-x: hidden; /* Disable horizontal scroll */
  /* padding-top: 60px; Place content 60px from the top */
  /* transition: 0.5s; 0.5 second transition effect to slide in the sidenav */
}

.bm-item-list {
      width: 100%;
      height: 100%;
      justify-content: center;
      font-size: 20px;
      margin: 0; 
    }

</style>
