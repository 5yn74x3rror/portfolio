import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';

import Layout from '../components/layouts/main';
import Fonts from '../components/fonts';
import theme from '../lib/theme';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          mode='wait'
          initial={true}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}
