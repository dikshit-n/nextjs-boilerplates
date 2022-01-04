import {
  createTheme,
  ThemeProvider as ThemeProviderWrapper,
} from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

export const ThemeProvider: React.FC = (props) => {
  const cache = createCache({
    key: "css",
    prepend: true,
  });

  const theme = createTheme();
  return (
    <CacheProvider value={cache}>
      <ThemeProviderWrapper theme={theme}>
        {props.children}
      </ThemeProviderWrapper>
    </CacheProvider>
  );
};
