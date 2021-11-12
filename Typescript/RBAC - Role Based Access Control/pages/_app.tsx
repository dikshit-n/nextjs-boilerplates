import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../redux";
import { useActions, useTypedSelector } from "../hooks";
import { useEffect } from "react";
import { AppLoader } from "../components/ui";
import { useRouter } from "next/dist/client/router";
import { isPublicRoute, withRBAC } from "../lib";

function MyApp({ Component, pageProps }: AppProps) {
  const { checkauthStatus } = useActions();
  const {
    data: { token, type },
    loading,
  } = useTypedSelector((state) => state.auth);
  const { pathname } = useRouter();

  useEffect(() => {
    if (!isPublicRoute(pathname) && pathname !== "/") checkauthStatus();
  }, []);

  return withRBAC(<Component {...pageProps} />, {
    pathname,
    token,
    onRoleCheckFailure: (pathname) => {
      console.log("role check failure");
    },
    loading,
    fallback: <AppLoader {...pageProps} />,
    notFound: true,
    role: type,
  });
}

export default wrapper.withRedux(MyApp);
