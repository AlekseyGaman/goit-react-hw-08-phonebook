import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 10px;
  width: 500px;
  height: 250px;
  background-color: #fcfcfc;
  border-radius: 15px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.61);
`;

export const InputBox = styled.div`
  position: relative;
`;

export const ContactsInput = styled.input`
  width: 250px;
  padding: 10px;
  border: 1px solid #b3bec8;
  border-radius: 5px;
  background: transparent;
  outline: none;
  color: #003161;
  font-size: 1em;

  &:valid,
  :focus,
  :hover {
    border: 1px solid #003161;
  }

  &:valid ~ span,
  :focus ~ span {
    color: #003161;
    transform: translateX(10px) translateY(-7px);
    font-size: 0.75em;
    padding: 0 10px;
    background-color: #fcfcfc;
    border-left: 1px solid #003161;
    border-right: 1px solid #003161;
    letter-spacing: 0.1em;
  }
`;

export const ContactsSpan = styled.span`
  position: absolute;
  left: 0;
  padding: 10px;
  pointer-events: none;
  font-size: 1em;
  color: #003161;
  text-transform: uppercase;
  transition: 0.5s;
`;

export const SubmitButton = styled.button`
  width: 150px;
  padding: 7px;
  font-size: 20px;
  color: #003161;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #003161;
  border-radius: 5px;

  &:hover,
  &:focus {
    color: #ffffff;
    border: 1px solid #2f5870;
    border-radius: 5px;
    background-color: #2f5870;
  }
`;
