import styled from '@emotion/styled'

export const Button = styled.button`
  width: 70px;
  height: 30px;
  background-color: white;
  outline: none;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: gray;
    color: white;
  }
`;
export const ButtonList = styled.ul`
  display: flex;
  align-items: center;
`
export const ListItem = styled.li`
  padding: 20px;
`