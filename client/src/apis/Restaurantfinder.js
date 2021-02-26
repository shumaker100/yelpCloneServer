import axios from "axios";

export default axios.create({
  baseURL: `${process.env.PORT}api/v1/restaurants/`,
});
