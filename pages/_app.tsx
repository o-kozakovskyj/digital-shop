import { theme } from '@/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '@/theme/createEmotionCache';
import Head from 'next/head';
import { store } from 'store';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = props => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
  <Provider store={store}>
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
    </CacheProvider>
    </Provider>
  );
};
export default MyApp;