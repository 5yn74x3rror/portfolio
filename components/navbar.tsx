import { FC, ReactNode } from 'react';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import Logo from './logo';
import ThemeToggleButton from './themeToggleButton';

const LinkItem: FC<LinkItemProps> = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900');

  return (
    <NextLink href={href}>
      <Link
        as='span'
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar: FC<NavbarProps> = (props) => {
  const { path } = props;

  return (
    <Box
      position='fixed'
      as='nav'
      w='100%'
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display='flex'
        p={2}
        maxW='container.md'
        flexWrap='wrap'
        alignItems='center'
        justifyContent='space-between'
      >
        <Flex align='center' mr={5}>
          <Heading as='h2' size='lg' letterSpacing='tighter' lineHeight={2}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems='center'
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href='/portfolio' path={path}>
            Portfolio
          </LinkItem>
          <LinkItem href='/posts' path={path}>
            Posts
          </LinkItem>
        </Stack>
        <Flex justifyContent='right'>
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant='outline'
                aria-label='Options'
              />
              <MenuList>
                <NextLink href='/' passHref>
                  <MenuItem>
                    About
                  </MenuItem>
                </NextLink>
                <NextLink href='/works' passHref>
                  <MenuItem>
                    Works
                  </MenuItem>
                </NextLink>
                <NextLink href='/posts' passHref>
                  <MenuItem>
                    Posts
                  </MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

type LinkItemProps = {
  path?: string;
  href: string;
  children: ReactNode;
};

type NavbarProps = {
  path: string;
};

export default Navbar;