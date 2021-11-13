import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../redux";
import { useActions, useTypedSelector } from "../hooks";
import { useEffect } from "react";
import { AppLoader } from "../components/ui";
import { useRouter } from "next/dist/client/router";
import { isPublicRoute, withRBAC } from "../lib";
import Logout from "./logout";

function MyApp({ Component, pageProps }: AppProps) {
  const { checkauthStatus } = useActions();
  const {
    data: { token, type },
    loading,
    error,
  } = useTypedSelector((state) => state.auth);
  const { pathname } = useRouter();

  useEffect(() => {
    if (!isPublicRoute(pathname)) checkauthStatus();
  }, []);
  return error ? (
    // logout if error occurs during authentication
    <Logout />
  ) : (
    withRBAC(<Component {...pageProps} />, {
      pathname,
      token,
      loading,
      fallback: <AppLoader {...pageProps} />,
      notFound: false,
      role: type,
    })
  );
}

export default wrapper.withRedux(MyApp);
