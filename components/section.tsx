import { motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';

const StyledDiv = chakra(
  motion.div, {
    shouldForwardProp: prop => shouldForwardProp(prop) || prop === 'transition',
  }
);

const Section: React.FC<SectionProps> = ({ children, delay = 0 }) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    // @ts-ignore no problem in operation, although type error appears.
    transition={{ duration: 0.8, delay }}
    mb={6}
  >
    {children}
  </StyledDiv>
);

export default Section;

type SectionProps = {
  delay: number;
  children: React.ReactNode;
}