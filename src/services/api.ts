// URL base: https://rest.coincap.io/v3/assets
// API URL: https://rest.coincap.io/v3/assets?limit=10&offset=0&apiKey=854e2728d0f17861557234ab1790d399d4478f2f8d778ca990fe922ac1789c9b

import axios from "axios";

export const api = axios.create({
  baseURL: "https://rest.coincap.io/v3",
});
