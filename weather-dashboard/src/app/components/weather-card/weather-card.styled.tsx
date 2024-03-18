import styled from 'styled-components';

export const DayOfWeekStyle = styled.div`
  font-family: "Capriola", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 44px;
  letter-spacing: 0px;
  text-align: center;
  color: #ffffff;

  @media screen and (max-width: 1215px) {
    font-size: 18px;
    line-height: 33px;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 22px;
  }
`;

export const WeatherTypeStyle = styled.div`
  font-family: "Capriola", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1px;
  text-align: center;
  color: #ffffff;

  @media screen and (max-width: 1215px) {
    font-size: 10px;
    line-height: 15px;
  }
  @media screen and (max-width: 768px) {
    font-size: 5px;
    line-height: 10px;
  }
`;

export const TempContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;
export const TempertureLow = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  font-family: "Capriola", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 44px;
  letter-spacing: 1px;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);

  @media screen and (max-width: 1215px) {
    font-size: 15px;
    line-height: 33px;
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
    line-height: 22px;
  }
`;

export const TempertureHigh = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  font-family: "Capriola", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 44px;
  letter-spacing: 1px;
  text-align: center;
  color:#ffffff;

  @media screen and (max-width: 1215px) {
    font-size: 15px;
    line-height: 33px;
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
    line-height: 22px;
  }
`;

export const ImageContainer = styled.div`
    display:flex;
    justify-content: center;
    width:100%;
`;
