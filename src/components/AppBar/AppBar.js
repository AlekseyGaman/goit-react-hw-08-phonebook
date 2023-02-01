import { Navigation } from '../Navigation/Navigation';
import { NavLink } from 'react-router-dom';
import { UserMenu } from '../UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className="header">
      <Navigation />
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <div className="header__inner">
          <NavLink to="/login">Sign In</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      )}
    </header>
  );
};

export default AppBar;
