// URL base: https://rest.coincap.io/v3/assets
// API URL: https://rest.coincap.io/v3/assets?limit=10&offset=0&apiKey=apiKey

import axios from "axios";

const apiKey = "chave da api";

const api = axios.create({
  baseURL: "https://rest.coincap.io/v3",
});

export { api, apiKey };
