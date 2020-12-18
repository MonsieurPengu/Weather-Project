import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://127.0.0.1:3003",
});

export default apiClient;
