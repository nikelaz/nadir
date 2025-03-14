import { MainLayout } from '../layouts/main';
import { Heading, Paragraph } from '@nadir-ui/typography';

const Typography = () => (
  <MainLayout>
    <h1>Typography</h1>
    <h2>Headings</h2>
    <Heading level={1} marginBottom="lg">Heading 1</Heading>
    <Heading level={2} marginBottom="lg">Heading 2</Heading>
    <Heading level={3} marginBottom="lg">Heading 3</Heading>
    <Heading level={4} marginBottom="lg">Heading 4</Heading>
    <Heading level={5} marginBottom="lg">Heading 5</Heading>
    <Heading level={6} marginBottom="lg">Heading 6</Heading>
    
    <h2>Paragraph</h2>
    <Paragraph>Lorem ipsum Lorem ipsum Lorem ipsum</Paragraph>
  </MainLayout>
);

export default Typography;
