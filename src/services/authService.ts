import axios from "axios";
import { AuthData } from "../types/authType";
import Cookies from "js-cookie";

export const login = (data: AuthData) => {
  axios.post("https://dummyjson.com/auth/login", data).then((res) => {
    Cookies.set("token", res.data.token);
  });
};
