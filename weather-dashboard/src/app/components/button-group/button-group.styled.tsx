import styled from 'styled-components';

export const ButtonGroupStyled = styled.button`
  border-radius: 50px;
  height: 45px;
  width: 45px;
  background-color: rgba(88, 86, 118, 1);
  color: #ffffff;
  border: 0px;
  margin: 2px;

  &.active {
    background-color: #ffffff;
    color: #000000;
  }

  & > img {
    margin: 7px 7px;
    text-align: center;
    display: block;
  }
`;
