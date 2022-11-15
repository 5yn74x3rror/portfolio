import { Container, Heading, SimpleGrid } from '@chakra-ui/react';

import Layout from '../components/layouts/article'
import Section from '../components/section';
import { WorkGridItem } from '../components/gridItem';
import thumb from '../public/images/thumb.png';

const Posts = () =>  (
  <Layout title='Posts'>
    <Container>
      <Heading as='h4' fontSize={20} mb={4}>
        Popular posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <WorkGridItem title='Example post' thumbnail={thumb} id='post'>
            Amazing post about something
          </WorkGridItem>
          <WorkGridItem title='Example post' thumbnail={thumb} id='post'>
            Amazing post about something
          </WorkGridItem>
          <WorkGridItem title='Example post' thumbnail={thumb} id='post'>
            Amazing post about something
          </WorkGridItem>
          <WorkGridItem title='Example post' thumbnail={thumb} id='post'>
            Amazing post about something
          </WorkGridItem>
          <WorkGridItem title='Example post' thumbnail={thumb} id='post'>
            Amazing post about something
          </WorkGridItem>
          <WorkGridItem title='Example post' thumbnail={thumb} id='post'>
            Amazing post about something
          </WorkGridItem>
          <WorkGridItem title='Example post' thumbnail={thumb} id='post'>
            Amazing post about something
          </WorkGridItem>
          <WorkGridItem title='Example post' thumbnail={thumb} id='post'>
            Amazing post about something
          </WorkGridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Posts;