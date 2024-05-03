import { useUserToken } from "../hook/useUserInfo";
import http from "./Api";

export const registerAccount = (body) => http.post("/user/register", body);

export const LoginAccount = (body) => http.post("/user/login", body);
export const VerifyAccount = (body) => http.post("/user/verify-email", body);

export const UpdateAccountUser = (body, id) => {
  const atk = useUserToken();
  const headers = {
    headers: {
      "Content-Type": `application/json`,
      Authorization: `Beaer ${atk}`,
    },
  };
  return http.put(`user/updateUser/${id}`, body, headers);
};
