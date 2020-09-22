import axios from "axios";
const instance = axios.create({
  baseURL: " https://polar-falls-30950.herokuapp.com/", //The API URL.. CLOUD FUNCTION
});
export default instance;
