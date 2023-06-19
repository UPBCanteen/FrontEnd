<template>
  <v-data-table
    :headers="headers"
    :items="items"
    class="elevation-1"
    :footer-props="{ 'items-per-page-text': 'Elemente pe pagina' }"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Meniu General</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Adauga mancare
            </v-btn>
          </template>

          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="Nume">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.quantity"
                      label="Cantitate"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.unit"
                      label="Unitate de masura"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.price" label="Pret">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.image"
                      label="Link poza"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">
                Anuleaza
              </v-btn>
              <v-btn color="blue darken-1" text @click="saveEdit"> Salveaza </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline"
              >Sigur stergeti elementul?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Anuleaza</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >Da</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import api from "../components/backend-api";
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "Nume", value: "name" },
      { text: "Portie", value: "quantity" },
      { text: "Pret", value: "price" },
      { text: "Actiuni", value: "actions", sortable: false }
    ],
    items: [],
    all_items: [],
    editedIndex: -1,
    editedItem: {
      id: "",
      name: "",
      unit: "",
      remainQuantity: "",
      quantity: "",
      price: "",
      image: ""
    },
    defaultItem: {
      id: "",
      name: "",
      unit: "",
      remainQuantity: "",
      quantity: "",
      price: "",
      image: ""
    }, 
    idCantina: "3"
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Adauga Element" : "Editeaza Element";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      api
        // .getMenuElementsFromCafeteria(localStorage.getItem("cafeteria_name"))
        .getMenuElementsFromCafeteria(this.idCantina)
        .then(response => {
          // for (const el of response.data)
          //   this.items.push({
          //     ...el,
          //     portion: el.unitValue + " " + el.unitType
          //   });
          this.items = response.data;
          console.log(response.data);
        })
        .catch(error => {
          this.error.push(error);
        });
    },

    editItem(item) {
      
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.items.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    saveEdit(){
      console.log("esited" + JSON.stringify(this.editedItem));
      api.editMeal(this.editedItem).then(response => {
        // this.initialize();
      })
      this.close();
    },

    save() {
      var new_portion =
        this.editedItem.unitValue + " " + this.editedItem.unitType;
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], {
          ...this.editedItem,
          ...{ portion: new_portion }
        });
      } else {
        this.items.push({ ...this.editedItem, ...{ portion: new_portion } });
      }

      console.log(this.idCantina);
      let meal = {
        "canteenId": this.idCantina,
        "mealDTO": {
          "quantity": this.editedItem.unitValue,
          "name": this.editedItem.name,
          "price": this.editedItem.unitPrice,
          "unit": this.editedItem.unitType,
          "image": this.editedItem.imageURL
        }
        
      };

      api.add_new_meal(meal);
      this.close();
    }
  }
};
</script>
