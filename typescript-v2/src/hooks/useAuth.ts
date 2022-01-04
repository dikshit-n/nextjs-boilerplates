import { authApi } from "@/api";
import { AUTH_DATA, LOGIN_DATA } from "@/models";
import { useSelector } from "@/redux";
import { useActions } from "@/hooks";
import { deleteCookie, setCookie } from "@/utils";
import { authSetup } from "@/data";

export const useAuth = () => {
  const { auth: authState } = useSelector((state) => state);
  const { auth } = useActions();

  function login(submitData: LOGIN_DATA): Promise<AUTH_DATA> {
    return new Promise(async (resolve, reject) => {
      try {
        const loginData = await authApi.login(submitData);
        const tokenAccessor = authSetup.token as keyof AUTH_DATA;
        setCookie(authSetup.token, loginData[tokenAccessor]);
        auth.login(loginData);
        resolve(loginData);
      } catch (err) {
        reject(err);
      }
    });
  }

  function logout(): Promise<void> {
    return new Promise(async (resolve) => {
      deleteCookie(authSetup.token);
      auth.logout();
      resolve();
    });
  }

  return {
    ...authState,
    login,
    logout,
  };
};
