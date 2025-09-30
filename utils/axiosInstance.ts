
import axios from "axios";

const api = axios.create({
  baseURL: process.env.mode === "development" ?  "http://localhost:3000/api" : "/api", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
