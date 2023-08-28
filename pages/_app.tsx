import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import "./global.css";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const muiTheme = createTheme();
  const chakraTheme = extendTheme({
    styles: { global: { img: { maxWidth: "unset" } } },
    colors: {
      gray: {
        50: "#f7fafc",
        100: "#edf2f7",
        200: "#e2e8f0",
        300: "#cbd5e0",
        400: "#a0aec0",
        500: "#718096",
        600: "#4a5568",
        700: "#2c3748",
        800: "#1a202c",
        900: "#171923",
      },
      color: {
        50: "#fee6ec",
        100: "#fcb5c5",
        200: "#fa849f",
        300: "#f85378",
        400: "#f62252",
        500: "#f50a3f",
        600: "#dd0939",
        700: "#ac072c",
        800: "#7b051f",
        900: "#4a0313",
      },
    },
  });
  const emotionCache = createCache({
    key: "emotion-cache",
    prepend: true,
  });

  return (
    <React.Fragment>
      <Head>
        <title>Travelin</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={muiTheme}>
        <CacheProvider value={emotionCache}>
          <ChakraProvider theme={chakraTheme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ChakraProvider>
        </CacheProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}
