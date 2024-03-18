import styled from 'styled-components';

export const DayOverviewContainer = styled.div`
  display:flex;
  justify-content: center;
  width: 100%;
  gap: 30px;
  flex-direction: row;

  @media screen and (max-width: 1215px) {
    flex-direction: column;
  }
`;

export const DayOverviewColumn = styled.div`
  display:flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  row-gap: 30px;

  @media screen and (max-width: 1215px) {
    width: 100%;
  }
`;

export const DayOverviewSmallCard = styled.div`
  display:flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  gap: 30px;
`;

export const DayOverviewRow = styled.div`
  display:flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  gap: 30px;
`;

export const DayOverviewTopCard = styled.div`
    margin-top: 15px;
`;

export const DayOverviewTitle = styled.div`
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
`;
