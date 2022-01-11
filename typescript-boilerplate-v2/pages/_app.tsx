import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useEffect } from "react";
import type { NextPage } from "next";
import { AuthProvider } from "@/provider";
import { Provider as StoreProvider } from "react-redux";
import { store } from "@/redux";
import { Public } from "@/guards";
import { ThemeProvider } from "@/theme";
import "@/assets/scss/global.scss";
import { createEventEmitters } from "@/utils";
import { useRouter } from "next/router";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  // emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page) => <Public>{page}</Public>);
  const { isReady } = useRouter();

  useEffect(() => {
    if (isReady) return;
    createEventEmitters();
  }, [isReady]);

  return (
    <StoreProvider store={store}>
      <ThemeProvider>
        <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default MyApp;
