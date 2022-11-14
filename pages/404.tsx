import NextLink from 'next/link';
import {
  Flex,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from '@chakra-ui/react';

const NotFound = () => (
  <Container>
    <Heading as='h1'>Empty in here</Heading>
    <Text>
      There are not the pages you are looking for
    </Text>
    
    <Divider my={6} />

    <Flex my={6} align='center'>
      <NextLink href='/'>
        <Button colorScheme='teal'>
          Back to home
        </Button>
      </NextLink>
    </Flex>
  </Container>
);

export default NotFound;