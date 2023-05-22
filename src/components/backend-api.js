import axios from "axios";
import store from "../store/index";
import { req } from "vuelidate/lib/validators/common";

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const AXIOS = axios.create({
  baseURL: `http://localhost:8098/api`,
  timeout: 30000
});

// AXIOS.interceptors.response.use(
//   function(response) {
//     if (response.headers["authorization"] != null) {
//       localStorage.setItem("access_token", response.headers["authorization"]);
//     }

//     if (response.data !== null && response.data.errorType != null) {
//       // store.state.errorDialog = true; TODO in state
//       // store.state.errorModel = response.data;
//     }

//     return response;
//   },
//   function(error) {
//      if (error.response.status === 403) {
//     //   //store.state.errorDialog = true; TODO in state
//     //   //store.state.errorModel = {errorType: "Access denied", message: "You have no permission on this action"};
//     }
//     return Promise.reject(error);
//   }
// );

// AXIOS.interceptors.request.use(
//   function(request) {
//     if (!request.url.includes("login")) {
//       request.headers["authorization"] = localStorage.getItem("access_token");
//     } else delete request.headers["authorization"];

//     return request;
//   },
//   function(error) {
//     return Promise.reject(error);
//   }
// );

export default {
  login(email, password) {
    return AXIOS.post("/login", {
      email: email,
      password: password
    });
  },
  getMenu() {
    return AXIOS.get("/menu");
  },
  getMenuElementsFromCafeteria(canteen_id) {
    return AXIOS.get("/meal/get-by-canteen-id/" + canteen_id);
  },
  getMenuElementsFromMenuDay(day, cafeteria) {
    return AXIOS.get(
      "/cafeteria/menuElementsFromMenuDay/" + day + "/" + cafeteria
    );
  },
  getUserWithoutId() {
    return AXIOS.get("/user/getCurrentUser");
  },
  getCafeteriasAdmin() {
    return AXIOS.get("/canteen/get-all");
  },
  getUsers() {
    return AXIOS.get("/user/getUsers");
  },
  getOrders() {
    return AXIOS.get("/order/getAll");
  },
  add_new_order(id, time) {
    return AXIOS.post("/order/newOrder/" + id + "/" + time);
  },
  add_new_canteen(canteen) {
    return AXIOS.post("/canteen/add", canteen);
  },
  edit_canteen(canteen) {
    return AXIOS.put("/canteen/edit", canteen);
  },
  delete_canteen(canteen_id) {
    console.log(canteen_id);
<<<<<<< HEAD
    return AXIOS.delete("canteen/delete", canteen_id);
  },
  add_user(user){
    return AXIOS.post("/user/authentication/register", user);
  },
  delete_user(email){
    return AXIOS.delete("/user/deleteUser/" + email);
=======
    return AXIOS.delete("canteen/delete/" + canteen_id);
  },
  add_new_meal(meal) {
    return AXIOS.post("meal/add", meal);
>>>>>>> 0c531400b798397075833487e9012c544292d1ac
  }
};
