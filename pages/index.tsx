import { FunctionComponent } from 'react';
import { Container, Flex, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react';

import Section from '../components/section';

const Page: FunctionComponent = () => {
  return (
    <Container>
      <Flex
        borderRadius='lg'
        bg={useColorModeValue('brown', '#bada55')}
        p={8}
        align='center'
        justify='center'
        color={useColorModeValue('white', 'black')}
      >
        Hellou!
      </Flex>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Maciej C
          </Heading>
          <p>Javascript Developer</p>
        </Box>
        <Flex
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ base: 6 }}
          justifyContent='center'
        >
          <Image
            borderColor='whiteAlpha.800'
            alt='Profile image'
            borderWidth={2}
            borderStart='solid'
            maxWidth='100px'
            display='inline-block'
            borderRadius='full'
            src='/images/profile.jpg'
          />
        </Flex>
      </Box>

      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          Work
        </Heading>
        <p>asldkjlk jaljdlkasjdl jjdjasd</p>
      </Section>
    </Container>
  );
};

export default Page;

