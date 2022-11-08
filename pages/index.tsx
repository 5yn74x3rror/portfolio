import { FunctionComponent } from 'react';
import NextLink from 'next/link';
import {
  Container,
  Flex,
  Box,
  Heading,
  Image,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import { ChevronRightIcon } from '@chakra-ui/icons';

const Page: FunctionComponent = () => {
  return (
    <Container maxW='container.lg'>
      <Flex
        borderRadius='lg'
        bg={useColorModeValue('brown', '#bada55')}
        p={8}
        align='center'
        justify='center'
        color={useColorModeValue('white', 'black')}
      >
        Da fuck?
      </Flex>
      <Box display={{ md: 'flex' }} mt={10}>
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
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, ex alias 
          reiciendis tempore nesciunt labore minus explicabo? Perferendis non ullam 
          minus incidunt et nemo at?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, sapiente?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, voluptates.
        </Paragraph>
        <Flex justifyContent='center' my={4}>
          <NextLink href='/works'>
            <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
              My portfolio
            </Button>
          </NextLink>
        </Flex>
      </Section>

      <Section delay={0.2}>
        <Heading as='h3' variant='section-title'>
          Bio
        </Heading>
        <BioSection>
          <BioYear>1984</BioYear>
          Born to be wide
        </BioSection>
        <BioSection>
          <BioYear>1985</BioYear>
          Celebrated 1st birthday
        </BioSection>
        <BioSection>
          <BioYear>1987</BioYear>
          Started programming
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Looking for a new job opportunity
        </BioSection>
      </Section>
    </Container>
  );
};

export default Page;

