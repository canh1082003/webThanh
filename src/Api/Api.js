import axios from "axios";
import { LOGIN_URL, REGISTER_URL } from "../util/constants";
import { toast } from "react-toastify";

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:4000/api/",
      timeout: 10000,
      headers: { "X-Custom-Header": "foobar" },
    });

    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config;
        switch (url) {
          case REGISTER_URL: {
            const email = response.data.data.email;
            window.location.href = `/verify/${email}`;
            return response;
          }
          case LOGIN_URL: {
            const userInfo = response.data.user;
            const atk = response.data.token;
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            localStorage.setItem("atk", JSON.stringify(atk));
            window.location.href = "/";
            return response;
          }
          default: {
            return response;
          }
        }
      },
      (error) => {
        const data = error.response?.data;
        if (error.status !== 401) {
          toast.error(data.errors.errorMessage);
        }
      }
    );
  }
}

const http = new Http().instance;
export default http;
