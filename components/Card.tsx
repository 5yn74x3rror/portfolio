import { Box, Button, Center, Heading, HStack, Image, Tag, Text } from '@chakra-ui/react';

type CardPropTypes = {
  children: React.ReactNode;
  title: string;
  thumbSrc: string;
  tags: string[];
};

const Card: React.FC<CardPropTypes> = ({
  children,
  title,
  thumbSrc,
  tags,
}) => (
  <Center as='section'>
    <Box p={6}>
      <Image
        src={thumbSrc}
        alt='img'
        borderRadius='xl'
        objectFit='cover'
        mx='auto'
      />
      <HStack mt={5} spacing={3}>
        {tags.map(el => (
          <Tag key={el} variant='outline'>
            {el}
          </Tag>
        ))}
      </HStack>
      <Heading my={4} size='lg'>{title}</Heading>
      <Text>
        {children} 
      </Text>
      <Center my={6}>
        <Button colorScheme='teal'>Read it!</Button>
      </Center>
    </Box>
  </Center>
);

export default Card;