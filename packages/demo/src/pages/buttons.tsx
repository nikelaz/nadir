import { MainLayout } from '../layouts/main';
import Button from '@nadir-ui/button';
import Stack from '../components/stack';

const Buttons = () => (
  <MainLayout>
    <h1>Buttons</h1>
    <h2>Default</h2>
    <Button onPress={() => console.log('click!')}>Hello!</Button>

    <h2>Sizes</h2>
    <Stack>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </Stack>
    
    <h2>Variants</h2>
    <Stack>
      <Button variant="pill">Pill</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
      <Button variants={["pill", "outlined"]}>Outlined Pill</Button>
      <Button variants={["pill", "text"]}>Text Pill</Button>
    </Stack>
    
    <h2>States</h2>
    <h3>Disabled</h3>
    <Stack>
      <Button isDisabled={true}>Disabled</Button>
      <Button isDisabled={true} variant="pill">Disabled Pill</Button>
      <Button isDisabled={true} variant="outlined">Disabled Outlined</Button>
      <Button isDisabled={true} variant="text">Disabled Text</Button>
      <Button isDisabled={true} variants={["pill", "outlined"]}>Disabled Pill Outlined</Button>
      <Button isDisabled={true} variants={["pill", "text"]}>Disabled Pill Text</Button>
    </Stack>
  </MainLayout>
);

export default Buttons;
