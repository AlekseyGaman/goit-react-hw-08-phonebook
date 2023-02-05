import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';
const fadeAnimation = keyframes`${fadeInUp}`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  animation: 1.5s ${fadeAnimation};
`;

export const HomeTitle = styled.div`
  font-size: 40px;
  color: #212121;
  /* font-weight: 600; */
  margin-bottom: 60px;
`;

export const HomeLogIn = styled.p`
  font-size: 25px;
  color: #212121;
  margin-bottom: 40px;
`;

export const HomeReg = styled.p`
  font-size: 25px;
  color: #212121;
  margin-bottom: 40px;
`;

export const HomeLink = styled(Link)`
  padding: 5px;
  text-decoration: none;
  color: #7e5fff;

  &:valid,
  :focus,
  :hover {
    border-radius: 10px;
    background-color: #7e5fff;
    color: #ffffff;
  }
`;
