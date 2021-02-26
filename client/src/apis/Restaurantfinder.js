import axios from "axios";

export default axios.create({
  baseURL: "{PORT}/api/v1/restaurants",
});
