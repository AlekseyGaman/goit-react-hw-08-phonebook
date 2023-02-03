import styled from 'styled-components';

export const FilterWrapper = styled.div`
  margin-top: 30px;
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

export const FilterInput = styled.input`
  margin-top: 10px;
  width: 250px;
  padding: 10px;
  border: 1px solid #b3bec8;
  border-radius: 5px;
  background: transparent;
  /* outline: 1px solid #2f5870; */
  font-size: 1em;

  &:hover,
  &:focus {
    outline: 1px solid #2f5870;
  }
`;
