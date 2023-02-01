import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div className="container">
        <AppBar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
