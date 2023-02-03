import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <div className="container">
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
