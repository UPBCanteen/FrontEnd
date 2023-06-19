<template>
  <v-container fluid id="container">
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
        <v-card>
          <v-avatar class="ma-6" size="125" rounded="0">
            <v-img :src="card.src"></v-img>
          </v-avatar>

          <v-card-title style="align-content: center;font-family: 'Serif';  font-size: 40px;">{{ card.title }}: {{
            initialize(card.title) }}</v-card-title>



        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import backendApi from '../components/backend-api';
import api from "../components/backend-api";
export default {
  name: "Home",
  mounted() {
    this.initialize()
  },
  data() {
    return {
      numberOfUser: 0,
      numberOfCanteens: 0,
      cards: [
        { title: 'Users', src: 'https://icones.pro/wp-content/uploads/2021/03/icone-de-groupe-symbole-png-orange.png', flex: 3, number: this.numberOfUser },
        { title: 'Canteens', src: 'https://icon-library.com/images/icon-restaurant/icon-restaurant-2.jpg', flex: 3, number: 3 }
      ],
      image: {
        backgroundImage:
          "url(https://i.pinimg.com/originals/f0/b6/15/f0b615f78dd809d68ec389f4bc8d94bb.jpg)"
      }
    };
  },
  methods: {
    initialize(name) {
      if (name == 'Users') {
        api.getUsersNumber()
          .then(response => {
            this.numberOfUser = response.data;
          })
          .catch(error => {
            this.errors.push(error);
          });
        return this.numberOfUser;
      } else {
        api.getCanteenNumber()
          .then(response => {
            this.numberOfCanteens = response.data;
          })
          .catch(error => {
            this.errors.push(error);
          });
        return this.numberOfCanteens;

      }
    }

  },


};
</script>

<style>
#container {
  top: 0;
  bottom: 0;
  height: 100%;
  padding-top: 30px;
  /* padding-right: 20%; */
  padding-left: 20%;

}

.home {
  height: 750px;
  background-repeat: no-repeat;
  background-size: cover !important;
}
</style>
