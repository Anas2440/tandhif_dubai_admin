import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.31.119:3000/admin",
});

export default API;
