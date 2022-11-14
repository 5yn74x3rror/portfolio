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
            <WorkGridItem id='example' title='Example' thumbnail={thumb}>
              Example Item 1 - description of item 1
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem id='item2' title='Item2' thumbnail={thumb}>
              Item 2 - description of item 2
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem id='item3' title='Item3' thumbnail={thumb}>
              Item 3 - description of item 3
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
            <WorkGridItem id='item4' title='Item4' thumbnail={thumb}>
              Item 4 - description of item 4
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem id='item5' title='Item5' thumbnail={thumb}>
              Item 5 - description of item 5
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem id='item6' title='Item6' thumbnail={thumb}>
              Item 6 - description of item 6
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;