import { NavLink } from 'react-router-dom';

export const AppAuthNav = () => {
  return (
    <div className="header__inner">
      <NavLink to="/login">Sign In</NavLink>
      <NavLink to="/register">Register</NavLink>
    </div>
  );
};
