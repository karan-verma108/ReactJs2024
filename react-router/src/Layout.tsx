import { Outlet } from 'react-router';

import { Header, Footer } from './components/global';

export default function Layout(): React.JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
