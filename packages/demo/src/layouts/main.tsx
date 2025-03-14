import { Link } from 'react-router';

export const MainLayout = (props: any) => (
  <>
    <aside>
      <Link to="/">Index</Link>
      <div>Components</div>
      <Link to="/buttons">Buttons</Link>
    </aside>
    <main>
      {props.children}
    </main>
  </>
);
