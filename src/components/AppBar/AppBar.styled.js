import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  -webkit-box-shadow: 0px 2px 12px -2px rgba(0, 0, 0, 0.17);
  box-shadow: 0px 2px 12px -2px rgba(0, 0, 0, 0.17);
`;

export const HeaderContainer = styled.div`
  display: flex;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 1200px;
  height: 70px;
  align-items: center;
  justify-content: center;
`;

// export const HeaderLogo = styled.h1`
//   margin-right: 120px;
//   color: #212121;
// `;

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
  font-size: 21px;
  font-style: oblique;
  /* font-weight: 600; */

  color: #212121;
`;

export const HeaderUserLogout = styled.button`
  padding: 5px 14px;
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 19px;
  /* font-weight: 600; */
  border: none;
  background-color: transparent;

  &:hover,
  &:focus {
    color: #ffffff;
    border-radius: 10px;
    background-color: #7e5fff;
  }
`;

export const HeaderLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0px 4px 0px 4px;
  font-size: 20px;
  /* font-weight: 600; */
  color: #212121;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #7e5fff;
    border-left: 2px solid #7e5fff;
    border-right: 2px solid #7e5fff;
    /* background-color: #ffd265; */
  }

  &.active {
    color: #7e5fff;
  }
`;
