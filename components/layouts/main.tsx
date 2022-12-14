import React from "react";
import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";

import Navbar from '../navbar';

type MainProps = {
  children?: React.ReactNode,
  router: {
    asPath: string
  }
};

const Main = ({ children, router }: MainProps) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>MC Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW='container.lg' pt={24}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;