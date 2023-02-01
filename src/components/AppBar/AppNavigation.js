// import { useAuth } from 'hooks/useAuth';
import { useAuth } from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';

export const AppNavigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <div className="header__inner">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </div>
    </>
  );
};
