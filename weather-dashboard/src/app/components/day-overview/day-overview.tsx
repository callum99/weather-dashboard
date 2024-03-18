import React from 'react'
import {
  DayOverviewColumn,
  DayOverviewContainer,
  DayOverviewRow,
  DayOverviewSmallCard,
  DayOverviewTitle,
  DayOverviewTopCard
} from './day-overview.styled';
import ProgressBar from '../progress-bar/progress-bar';
import CardTile from '../card-tile/card-tile';

type DayOverviewProps = {
  humidity?: string;
  maxTemp?: string;
  minTemp?: string;
  sunrise?: string;
  sunset?: string;
  cloudCover?: string;
  setSuffix: string;
}
const DayOverview = ({humidity, maxTemp, minTemp, sunrise, sunset, cloudCover, setSuffix}: DayOverviewProps) => {
  const timeReducer = (time: any) => {
    const dateObject = new Date();
    const newTime = time.toString().split(':');

    return `${newTime[0]}:${newTime[1]}`;
  }
  return (
    <>
      <DayOverviewTitle>Day Overview</DayOverviewTitle>
      <DayOverviewContainer>
        <DayOverviewColumn>
          <DayOverviewTopCard>
            <CardTile>
              <ProgressBar
                barColour="#A9FF53"
                completion={`${humidity}%`}
                subTitle={`${humidity}%`}
                title="Humidity" />
            </CardTile>
          </DayOverviewTopCard>

          <DayOverviewRow>
            <DayOverviewSmallCard>
              <CardTile title="Max temp." subTitle={`${maxTemp}${setSuffix}`} />
            </DayOverviewSmallCard>
            <DayOverviewSmallCard>
              <CardTile title="Min temp." subTitle={`${minTemp}${setSuffix}`} />
            </DayOverviewSmallCard>
          </DayOverviewRow>
        </DayOverviewColumn>

        <DayOverviewColumn>
          <DayOverviewTopCard>
            <CardTile>
              <ProgressBar barColour="#FAFF00" completion={`${cloudCover}%`} subTitle={`${cloudCover}%`} title="Cloud Cover" />
            </CardTile>
          </DayOverviewTopCard>
          <DayOverviewRow>
            <DayOverviewRow>
              <DayOverviewSmallCard><CardTile title="Sunrise" subTitle={timeReducer(sunrise)} /></DayOverviewSmallCard>
              <DayOverviewSmallCard><CardTile title="Sunset" subTitle={timeReducer(sunset)} /></DayOverviewSmallCard>
            </DayOverviewRow>
          </DayOverviewRow>
        </DayOverviewColumn>
      </DayOverviewContainer>
    </>
  );
}

export default DayOverview;
