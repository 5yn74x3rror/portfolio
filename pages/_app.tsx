import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import Layout from '../components/layouts/main';
import Fonts from '../components/fonts';
import theme from '../lib/theme';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
}
