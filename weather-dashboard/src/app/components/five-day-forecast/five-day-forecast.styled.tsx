import styled from 'styled-components';

export const FiveDayForecastTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font-family: "Capriola", sans-serif;
  font-size: 2.25rem;
  font-weight: 400;
  line-height: 2.75rem;
  letter-spacing: 0rem;
  text-align: left;
  color: #ffffff;
  margin: 30px 0px 15px 0px;
`;

export const FiveDayForecastContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
`;
export const FiveDayForecastColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  max-width: 20%;
`;
