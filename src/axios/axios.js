import axios from "axios";

const instance = axios.create({
    baseURL: "https://projectx-rebornit.herokuapp.com"
})

export default instance;