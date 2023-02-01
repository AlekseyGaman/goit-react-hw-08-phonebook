import { useAuth } from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <div className="header__inner">
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </div>
    </>
  );
};
