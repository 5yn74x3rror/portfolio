import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
} from '@chakra-ui/react';

import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/gridItem';
import thumb from '../public/images/thumb.png';

const Works = () => {
  return (
    <Layout title='Portfolio'>
      <Container maxW='container.lg'>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} gap={6}>
          <Section delay={0.2}>
            <WorkGridItem id='item1' title='Item1' thumbnail={thumb}>
              Item 1 - description of item 1
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem id='item1' title='Item1' thumbnail={thumb}>
              Item 1 - description of item 1
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem id='item1' title='Item1' thumbnail={thumb}>
              Item 1 - description of item 1
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.3}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Collaborations
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 2, 3]} gap={6}>
          <Section delay={0.2}>
            <WorkGridItem id='item1' title='Item1' thumbnail={thumb}>
              Item 1 - description of item 1
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem id='item1' title='Item1' thumbnail={thumb}>
              Item 1 - description of item 1
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem id='item1' title='Item1' thumbnail={thumb}>
              Item 1 - description of item 1
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;