import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { AuthProvider } from "@/provider";
import { Provider as StoreProvider } from "react-redux";
import { store } from "@/redux";
import { Public } from "@/guards";
import { ThemeProvider } from "@/theme";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  // emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page) => <Public>{page}</Public>);

  return (
    <StoreProvider store={store}>
      <ThemeProvider>
        <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default MyApp;
