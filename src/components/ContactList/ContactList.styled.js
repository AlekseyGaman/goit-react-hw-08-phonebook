import styled from 'styled-components';

export const ContactListUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 20px;
  margin-top: 30px;
  margin-bottom: 15px;
  width: auto;
`;

export const ContactLi = styled.li`
  display: flex;
  min-width: 480px;
  gap: 20px;

  :nth-child(2n) {
    background-color: #f3f3f3;
  }

  & p {
    font-size: 20px;
    display: list-item;
    width: 150px;
  }
  & span {
    font-size: 20px;
    width: 110px;
  }
  & button {
    padding: 7px;
    width: 66px;
    max-height: 30px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    margin-left: auto;
    transition: 0.3s;
    &:hover,
    :focus {
      background-color: #7e5fff;
      color: #ffffff;
    }
  }
`;
