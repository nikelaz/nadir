import { MainLayout } from '../layouts/main';
import Button from '@nadir-ui/button';

const Buttons = () => (
  <MainLayout>
    <h1>Buttons</h1>
    <h2>Default</h2>
    <Button>Hello!</Button>

    <h2>Sizes</h2>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>

    <h2>Variants</h2>
    <Button variant="pill">Pill</Button>
    <Button variant="outlined">Outlined</Button>
    <Button variant="text">Text</Button>
    <Button variants={["pill", "outlined"]}>Outlined Pill</Button>
    <Button variants={["pill", "text"]}>Text Pill</Button>
  </MainLayout>
);

export default Buttons;
