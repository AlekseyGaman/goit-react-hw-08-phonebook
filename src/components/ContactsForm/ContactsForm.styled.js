import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 30px;
  padding: 10px;
  width: 500px;
  height: 250px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.61);
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
  color: #212121;
  font-size: 1em;

  &:valid,
  :focus,
  :hover {
    border: 1px solid #7e5fff;
  }

  &:valid ~ span,
  :focus ~ span {
    color: #7e5fff;
    transform: translateX(10px) translateY(-7px);
    font-size: 0.75em;
    padding: 0 10px;
    background-color: #fcfcfc;
    border-left: 1px solid #7e5fff;
    border-right: 1px solid #7e5fff;
    letter-spacing: 0.1em;
  }
`;

export const ContactsSpan = styled.span`
  position: absolute;
  left: 0;
  padding: 10px;
  pointer-events: none;
  font-size: 1em;
  color: #212121;
  text-transform: uppercase;
  transition: 0.5s;
`;

export const SubmitButton = styled.button`
  width: 150px;
  padding: 7px;
  font-size: 20px;
  color: #212121;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #212121;
  border-radius: 5px;

  &:hover,
  &:focus {
    color: #ffffff;
    border: 1px solid #7e5fff;
    border-radius: 5px;
    background-color: #7e5fff;
  }
`;
