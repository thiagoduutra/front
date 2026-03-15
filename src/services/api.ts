import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7185/api",
});

export default api;
