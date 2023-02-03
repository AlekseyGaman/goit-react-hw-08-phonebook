import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #ececec;
`;

export const HeaderContainer = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 1200px;
  height: 70px;
  align-items: center;
  justify-content: center;
`;

export const HeaderLogo = styled.h1`
  margin-right: 120px;

  // CSS
  color: #e91e63;
  background-image: -webkit-linear-gradient(
    45deg,
    #e91e63 14%,
    #bcc785 51%,
    #086fa6 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  /* text-fill-color: transparent; */
  -webkit-text-fill-color: transparent;
`;

export const HeaderNav = styled.div`
  display: flex;
  gap: 30px;
`;

export const HeaderLogReg = styled.div`
  display: flex;
  gap: 30px;
  margin-left: auto;
`;

export const HeaderUser = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: auto;
`;

export const HeaderUserName = styled.p`
  font-size: 22px;
  font-style: oblique;
  font-weight: 600;

  color: #1c495b;
`;

export const HeaderUserLogout = styled.button`
  padding: 4px 12px;
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 19px;
  font-weight: 600;
  border: none;
  background-color: transparent;

  &:hover,
  &:focus {
    color: #ffffff;
    border-radius: 20px;
    background-color: #f36871;
  }
`;

export const HeaderLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0px 4px 0px 4px;
  font-size: 20px;
  font-weight: 600;
  color: #1c495b;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #f36f68;
    border-left: 2px solid #f36871;
    border-right: 2px solid #f36871;
    /* background-color: #ffd265; */
  }

  &.active {
    color: #f36f68;
  }
`;
