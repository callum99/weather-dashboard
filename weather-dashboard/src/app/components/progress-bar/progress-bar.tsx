import React from 'react'
import {
  BarContainer,
  BarFillerContainer,
  BarLabelStyles,
  BarSubTitle,
  BarTitle,
  Container,
  ScaleStyles
} from './progress-bar.styled';

type ProgressBarProps = {
  barColour: string;
  completion: string;
  title: string;
  subTitle: string;
}
const ProgressBar = ({barColour, completion, title, subTitle}: ProgressBarProps) => {
  return (
    <Container>
      <BarTitle>{title}</BarTitle>
      <BarSubTitle>{subTitle}</BarSubTitle>
      <BarLabelStyles>
        <span>%</span>
      </BarLabelStyles>
      <BarContainer>
        <BarFillerContainer completion={completion} barColour={barColour} />
      </BarContainer>
      <ScaleStyles>
        <span>0</span>
        <span>100</span>
      </ScaleStyles>
    </Container>
  );
}

export default ProgressBar;
