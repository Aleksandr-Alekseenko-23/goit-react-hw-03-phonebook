import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 250px;
  background-color: white;
`;

export const Item = styled.li`
  font-size: 24px;
  color: orange;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 15px;
`;

export const Span = styled.span`
  font-size: 24px;
  color: orange;
  padding-left: 20px;
`;

export const Img = styled.img`
  width: 15px;
`;

export const Button = styled.button`
  width: 30px;
  background-color: rgba(28, 28, 28, 0);
  border-color: red;
  cursor: pointer;
`;
