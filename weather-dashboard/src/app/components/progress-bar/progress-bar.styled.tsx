import styled, { css } from 'styled-components';

const fontStyles = css`
  font-family: __capriola_b990cb;
  font-size: 0.938rem;
  font-weight: 400;
  line-height: 1.75rem;
  letter-spacing: 0.063rem;
  text-align: center;
  color:#ffffff;
`;

export const Container = styled.div`
  display:flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;
export const BarContainer = styled.div`
  height: 0.625rem;
  width: 100%;
  background-color: #F5F5F5;
  border-radius: 3.125rem;
`;

export const BarFillerContainer = styled('div').withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !['completion','barColour'].includes(prop)
})`
  height: 100%;
  border-radius: 3.125rem 0rem 0rem 3.125rem;
  text-align: right;
  ${(props) => props.completion ? `width:` + props.completion + ';' : 'width:0%;'}
  ${(props) => props.barColour ? `background-color:` + props.barColour + ';' : 'background-color:#000000;'}
`;

export const BarTitle = styled.div`
  display:flex;
  justify-content: center;
  align-self: center;
  width: 100%;
  font-family: __capriola_b990cb;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 2.75rem;
  letter-spacing: 0.063rem;
  text-align: center;
  color: #ffffff;
`;

export const BarSubTitle = styled.div`
  display:flex;
  justify-content: center;
  align-self: center;
  width: 100%;
  font-family: __capriola_b990cb;
  font-size: 2.25rem;
  font-weight: 400;
  line-height: 2.75rem;
  letter-spacing: 0.063rem;
  text-align: center;
  color: #ffffff
`;
export const ScaleStyles = styled.div`
  display:flex;
  justify-content: space-between;
  color: #000000;
  ${fontStyles};
`;

export const BarLabelStyles = styled.div`
  display:flex;
  justify-content: flex-end;
  color: #000000;
  ${fontStyles};
`;


