import { AppNavigation } from './AppNavigation';
import { AppUserMenu } from './AppUserMenu';
import { AppAuthNav } from './AppAuthNav';
// import { useAuth } from 'hooks/useAuth';
import { useAuth } from '../../hooks/useAuth';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className="header">
      <AppNavigation />
      {/* <AppUserMenu /> */}
      <AppAuthNav />
    </header>
  );
};

export default AppBar;
