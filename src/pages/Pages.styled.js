import styled, { keyframes } from 'styled-components';
import { bounceIn, fadeIn } from 'react-animations';
const fadeAnimation = keyframes`${bounceIn}`;
const fadeInAnimation = keyframes`${fadeIn}`;

export const LoginContainer = styled.div`
  animation: 1s ${fadeAnimation};
`;

export const RegisterContainer = styled.div`
  animation: 1s ${fadeAnimation};
`;

export const ContactsContainer = styled.div`
  animation: 1s ${fadeInAnimation};
`;
