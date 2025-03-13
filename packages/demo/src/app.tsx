import Button from '@nadir-ui/button';

const App = () => (
  <Button
    size="lg"
    variant='outlined'
    onPress={() => alert("hello there!")}
  >
    Hello!
  </Button>
);

export default App;
