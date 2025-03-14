const Stack = (props: any) => (
  <div style={{
    display: 'flex',
    gap: '1em',
  }}>
    {props.children}
  </div>
);

export default Stack;
