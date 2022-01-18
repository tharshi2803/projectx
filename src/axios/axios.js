import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://projectx-rebornit.herokuapp.com/",
});

export default axiosInstance;