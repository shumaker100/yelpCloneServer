import axios from "axios";

export default axios.create({
  baseURL: `${process.env.API_ENDPOINT}api/v1/restaurants/`,
});
