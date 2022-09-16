import styled from 'styled-components';

export const InputPhoneBook = styled.input`
  background-color: white;
  width: 500px;
  height: 35px;
  border: none;
  outline: none;
  margin-bottom: 30px;
  font-size: 24px;
  color: orange;
  padding-left: 20px;

  &::placeholder {
    font-size: 24px;
    color: orange;
    padding-left: 20px;
  }
`;

export const LabelPhoneBook = styled.label`
  display: flex;
  gap: 15px;
  flex-direction: column;

  color: orange;
  font-size: 24px;
`;
