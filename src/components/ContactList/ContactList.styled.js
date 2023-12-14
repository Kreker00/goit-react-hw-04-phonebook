import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: auto;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;

  &:hover {
    background-color: #f0f0f0;
  }
`;
