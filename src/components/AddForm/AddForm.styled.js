import styled from 'styled-components';

export const FormPhoneBook = styled.form`
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const InputPhoneBook = styled.input`
  background-color: white;
  width: 400px;
  height: 35px;
  border: none;
  outline: none;
  font-size: 24px;
  color: orange;
  padding-left: 20px;

  &::placeholder {
    font-size: 24px;
    color: orange;
  }
`;

export const LabelPhoneBook = styled.label`
  display: flex;
  gap: 15px;
  flex-direction: column;

  color: orange;
  font-size: 24px;
`;

export const Button = styled.button`
  background-color: rgba(28, 28, 28, 0);
  border-color: orange;
  cursor: pointer;
  width: 100px;
  height: 100px;
`;
