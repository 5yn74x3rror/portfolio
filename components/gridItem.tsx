import NextLink from 'next/link';
import Image, { StaticImageData } from 'next/image';
import {
  Box,
  Flex,
  Text,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import { Global } from '@emotion/react';

export const GridItem: React.FC<GridItemProps> = ({
  children,
  href,
  title,
  thumbnail,
}) => (
  <Box>
    <LinkBox cursor='pointer'>
      <Image
        src={thumbnail}
        alt={title}
        className='gridItemThumbnail'
        placeholder='blur'
        loading='lazy'  
      />
      <LinkOverlay href={href} target='_blank'>
        <Text mt={2}>
          {title}
        </Text>
      </LinkOverlay>
      <Text>
        {children}
      </Text>
    </LinkBox>
  </Box>
);

export const WorkGridItem: React.FC<WorkGridItemProps> = ({
  children,
  id,
  title,
  thumbnail,
}) => (
  <Flex w='100%' align='center'>
    <NextLink href={`/works/${id}`}>
      <Image 
        src={thumbnail}
        alt={title}
        className='gridItemThumbnail'
        placeholder='blur'
      />
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      <Text fontSize={14}>
        {children}
      </Text>
    </NextLink>
  </Flex>
);

export const GridItemStyle = () => (
  <Global
    styles={`
      .gridItemThumbnail {
        border-radius: 12px;
      }
    `}
  />
);

type GridItemProps = {
  children: React.ReactNode;
  href: string;
  title: string;
  thumbnail: string;
};

type WorkGridItemProps = {
  children: React.ReactNode;
  id: string;
  title: string;
  thumbnail: StaticImageData;
};