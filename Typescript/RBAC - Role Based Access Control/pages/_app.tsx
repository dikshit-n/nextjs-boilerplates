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
    // don't check for authentication, if the route is a public or an error page
    if (!isPublicRoute(pathname) && pathname !== "/_error") checkauthStatus();
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
