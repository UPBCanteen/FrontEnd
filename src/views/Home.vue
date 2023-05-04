<template>
  <v-container fluid id="container">
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-avatar
                class="ma-3"
                size="125"
                rounded="0"
              >
                <v-img :src="card.src"></v-img>
              </v-avatar>
            
              <v-card-title>{{card.title}}: {{ card.number }}</v-card-title>
           

            
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      cards: [
        { title: 'Users', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 2, number:3},
        { title: 'Canteens', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 2, number:3},
        { title: 'Reviews', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 2, number:3},
      ],
      image: {
        backgroundImage:
          "url(https://i.pinimg.com/originals/f0/b6/15/f0b615f78dd809d68ec389f4bc8d94bb.jpg)"
      }
    };
  }
};
</script>

<style>
#container{
  padding-left: 200px;
  padding-top: 50px;
}
.home {
  height: 750px;
  background-repeat: no-repeat;
  background-size: cover !important;
}
</style>
