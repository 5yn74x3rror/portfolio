import Link from "next/link";
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from "@emotion/styled";

import HeartIcon from './icons/heart';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  return (
    <Link href='/'>
      <LogoBox>
        <HeartIcon />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='Josefin Sans'
          fontWeight='bold'
          ml={3}
        >
          Maciej
          <br />
          Cywiński
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;