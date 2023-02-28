import { theme } from '@/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '@/theme/createEmotionCache';
import Head from 'next/head';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = props => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (<>
    <Head>
      <title>Digital shop</title>
      <meta name="description" content="Live sport matches" />
      <link rel="icon" href="/images/favicon.ico" />
    </Head>
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider></>
  );
};
export default MyApp;