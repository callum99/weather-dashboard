import styled from 'styled-components';
import { ButtonGroupStyled } from '../button-group/button-group.styled';

export const SearchBarStyled = styled.input`
  border-radius: 5px;
  max-width: 400px;
  width: 100%;
  height: 50px;
  margin-right: 20px;
`;

export const SearchBarContainer = styled.div`
  display:flex;
  justify-content: center;
  width: 100%;
  flex-direction: row;
`;

export const SearchBtn = styled(ButtonGroupStyled)`
  color:#000000;
  background-color:#ffffff;
`;
