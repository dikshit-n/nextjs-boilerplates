import { AUTH_DATA, LOGIN_DATA } from "@/models";
import { axiosInstance } from "@/utils";

class AuthApi {
  login(loginData: LOGIN_DATA): Promise<AUTH_DATA> {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axiosInstance.post("/auth/login", loginData);
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
  initialize(): Promise<AUTH_DATA> {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axiosInstance.get("/auth/refresh");
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
}

export const authApi = new AuthApi();
