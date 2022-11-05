import { Container, Flex, Box, Heading } from '@chakra-ui/react';

const Page = () => {
  return (
    <Container>
      <Flex borderRadius='lg' bg='yellow' p={8} align='center' justify='center'>
        Hellou!
      </Flex>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Maciej C
          </Heading>
          <p>Javascript Developer</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;

