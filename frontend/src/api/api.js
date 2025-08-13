import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // ou sua API online
  withCredentials: true // 🔥 envia/recebe cookies automaticamente
});

export default api;