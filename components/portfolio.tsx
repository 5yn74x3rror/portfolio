import NextLink from 'next/link';
import {
  Box,
  Heading,
  Image,
  Link,
  Badge,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

type PropsWithChildren = {
  children: React.ReactNode;
};

type WorkImageProps = {
  src: string;
  alt: string;
};

export const Title: React.FC<PropsWithChildren> = ({ children }) => (
  <Box>
    <NextLink href='/works'>
      <Link>Works</Link>
    </NextLink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display='inline-block' as='h3' fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);

export const WorkImage: React.FC<WorkImageProps> = ({ src, alt }) => (
  <Image borderRadius='lg' w='full' src={src} alt={alt} mb={4} />
);

export const Meta: React.FC<PropsWithChildren> = ({ children }) => (
  <Badge colorScheme='green' mr={2}>
    {children}
  </Badge>
);

// export default NotFound;