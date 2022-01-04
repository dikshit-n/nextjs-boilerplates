import { authApi } from "@/api";
import { useActions } from "@/hooks";
import { useSelector } from "@/redux";
import { getCookie } from "@/utils";
import { useEffect } from "react";

export const JWTAuthProvider: React.FC = (props) => {
  const { auth } = useActions();
  const { isInitialized } = useSelector((state) => state.auth);

  useEffect(() => {
    const initialize = async () => {
      try {
        const token = getCookie("token");
        if (token) {
          const loginData = await authApi.initialize();
          auth.initialize({ data: loginData, isAuthenticated: true });
        } else auth.initialize({ data: null, isAuthenticated: false });
      } catch (err) {
        auth.initialize({ data: null, isAuthenticated: false });
      }
    };
    initialize();
  }, []);

  return <>{isInitialized ? props.children : <div>Initializing...</div>}</>;
};
