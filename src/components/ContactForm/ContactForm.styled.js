import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 10px;
  width: 500px;
  height: 300px;
  background-color: #2f5870;
  border-radius: 15px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.61);
`;

export const InputBox = styled.div`
  position: relative;
`;

export const ContactInput = styled.input`
  width: 250px;
  padding: 10px;
  border: 1px solid #b3bec8;
  border-radius: 5px;
  background: transparent;
  outline: none;
  color: #ffffff;
  font-size: 1em;

  &:valid,
  :focus,
  :hover {
    border: 1px solid #0ff6c1;
  }

  &:valid ~ span,
  :focus ~ span {
    color: #0ff6c1;
    transform: translateX(10px) translateY(-7px);
    font-size: 0.75em;
    padding: 0 10px;
    background-color: #2f5870;
    border-left: 1px solid #0ff6c1;
    border-right: 1px solid #0ff6c1;
    letter-spacing: 0.1em;
  }
`;

export const ContactSpan = styled.span`
  position: absolute;
  left: 0;
  padding: 10px;
  pointer-events: none;
  font-size: 1em;
  color: #b3bec8;
  text-transform: uppercase;
  transition: 0.5s;
`;

export const SubmitButton = styled.button`
  width: 150px;
  padding: 7px;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #b3bec8;
  border-radius: 5px;

  &:focus,
  :hover {
    color: #0ff6c1;
    /* background-color: #4d6b7c; */
    border: 1px solid #0ff6c1;
  }
`;
