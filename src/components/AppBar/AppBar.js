import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import {
  Header,
  HeaderContainer,
  // HeaderLogo,
  HeaderNav,
  HeaderLink,
  HeaderLogReg,
  HeaderUser,
  HeaderUserName,
  HeaderUserLogout,
} from './AppBar.styled';

const AppBar = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useAuth();

  return (
    <Header>
      <HeaderContainer>
        {/* <HeaderLogo>Pb</HeaderLogo> */}
        <HeaderNav>
          <HeaderLink to="/">Home</HeaderLink>
          {isLoggedIn && <HeaderLink to="/contacts">Contacts</HeaderLink>}
        </HeaderNav>
        {isLoggedIn ? (
          <HeaderUser>
            <HeaderUserName>Welcome, {user.name}</HeaderUserName>
            <HeaderUserLogout type="button" onClick={() => dispatch(logOut())}>
              <BiLogOut /> Logout
            </HeaderUserLogout>
          </HeaderUser>
        ) : (
          <HeaderLogReg>
            <HeaderLink to="/login">
              <BiLogIn /> Sign In
            </HeaderLink>
            <HeaderLink to="/register">Register</HeaderLink>
          </HeaderLogReg>
        )}
      </HeaderContainer>
    </Header>
  );
};

export default AppBar;
