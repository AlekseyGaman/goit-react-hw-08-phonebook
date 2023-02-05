import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Footer } from 'components/Footer/Footer';

const Layout = () => {
  return (
    <>
      <AppBar />
      <div className="container">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
