import axios from "axios";

export default axios.create({
  baseURL: "https://api/v1/restaurants/process.env.API_ENDPOINT",
});
