import axios from "axios";

export const gitHubApi = axios.create({
  baseUrl: "https://api.github.com/users/",
  timeout: 8000,
});
