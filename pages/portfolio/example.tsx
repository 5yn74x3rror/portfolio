import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { Title, WorkImage, Meta } from '../../components/portfolio';
import Paragraph from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => (
  <Layout title="Example">
    <Container>
      <Title>
        Example <Badge>2022</Badge>
      </Title>
      <Paragraph>
        An example of future works I will do...
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href='google.com'>
            Google <ExternalLinkIcon mx='2px' />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>MacOS, Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Node, Typescript</span>
        </ListItem>
      </List>

      <WorkImage src='/images/thumb.png' alt='Work image' />
    </Container>
  </Layout>
);

export default Work;