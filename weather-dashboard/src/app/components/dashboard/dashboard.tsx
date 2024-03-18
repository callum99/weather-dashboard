'use client';
import React, { useEffect, useState } from 'react';
import {
  DashContainer,
  DashLeftContainer,
  DashRightContainer,
  ImageContainer,
  TodayCondition,
  BtnContainer,
  TodayDate,
  TodayLocation,
  TodayTemp
} from './dashboard.styled';
import DayOverview from '../day-overview/day-overview';
import FiveDayForeCast from '../five-day-forecast/five-day-forecast';
import ButtonGroup from '../button-group/button-group';
import SearchBar from '../search-bar/search-bar';
import Image from "next/image";
import {WeatherData} from "./dashboard.const";
import {getSuffix} from '../../utils/getSuffix'
import {getDate} from "../../utils/getDate";

const Dashboard = () => {
  const [weather, setWeather] = useState(
    WeatherData
  );
  const [location, setLocation] = useState("portsmouth");
  const [metric, setMetric] = useState("unitGroup=uk")
  const date1 = getDate();
  const date2 = getDate(7);

  const displayDate = (date: number) => {
    const newDate = new Date(date*1000).toDateString();
    const dateSegment = newDate.split(' ');

    return `${dateSegment[0]}, ${dateSegment[2]} ${dateSegment[1]}`
  }

  const tempertureReducer = (temp: number) => {
    const newTemp = temp.toString().split('.');

    return newTemp[0];
  }

  const fetchUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date1}/${date2}?${metric}&key=NYRZP8W4VDX2YJ42H7C2QZNE3`;

  useEffect( () => {
    fetch(fetchUrl)
      .then(response => response.json())
      .then(json => {
        setWeather(json);
      })
      .catch(error => console.error(error));
  }, [fetchUrl]);

  return (
    <DashContainer>
      <DashLeftContainer>
        <SearchBar setLocation={setLocation}/>
        <TodayLocation>{weather.address}</TodayLocation>
        <TodayDate>{displayDate(weather.days[0].datetimeEpoch)}</TodayDate>
        <ImageContainer>
          <Image alt="Weather Icon" width="233" height="209" layout="responsive" src="/images/cloudy-day.svg" />
        </ImageContainer>
        <TodayTemp>{`${tempertureReducer(weather.days[0].temp)}${getSuffix(metric)}`}</TodayTemp>
        <TodayCondition>{weather.days[0].conditions}</TodayCondition>
      </DashLeftContainer>
      <DashRightContainer>
        <BtnContainer>
          <ButtonGroup setMetric={setMetric}/>
        </BtnContainer>
        <DayOverview
          cloudCover={weather.days[0].cloudcover.toString()}
          humidity={weather.days[0].humidity.toString()}
          maxTemp={tempertureReducer(weather.days[0].tempmin)}
          minTemp={tempertureReducer(weather.days[0].tempmax)}
          sunrise={weather.days[0].sunrise}
          sunset={weather.days[0].sunset}
          setSuffix={getSuffix(metric)}/>
        <FiveDayForeCast weatherData={[
          {
            dayOfWeek: displayDate(weather.days[1].datetimeEpoch),
            highTemp: tempertureReducer(weather.days[1].tempmax),
            imageUrl: '/images/rainy.svg',
            lowTemp: tempertureReducer(weather.days[1].tempmin),
            weatherType: weather.days[1].conditions,
            setSuffix: getSuffix(metric),
          },
          {
            dayOfWeek: displayDate(weather.days[2].datetimeEpoch),
            highTemp: tempertureReducer(weather.days[2].tempmax),
            imageUrl: '/images/rainy.svg',
            lowTemp: tempertureReducer(weather.days[2].tempmin),
            weatherType: weather.days[2].conditions,
            setSuffix: getSuffix(metric),
          },
          {
            dayOfWeek: displayDate(weather.days[3].datetimeEpoch),
            highTemp: tempertureReducer(weather.days[3].tempmax),
            imageUrl: '/images/rainy.svg',
            lowTemp: tempertureReducer(weather.days[3].tempmin),
            weatherType: weather.days[3].conditions,
            setSuffix: getSuffix(metric),
          },
          {
            dayOfWeek: displayDate(weather.days[4].datetimeEpoch),
            highTemp: tempertureReducer(weather.days[4].tempmax),
            imageUrl: '/images/rainy.svg',
            lowTemp: tempertureReducer(weather.days[4].tempmin),
            weatherType: weather.days[4].conditions,
            setSuffix: getSuffix(metric),
          },
          {
            dayOfWeek: displayDate(weather.days[5].datetimeEpoch),
            highTemp: tempertureReducer(weather.days[5].tempmax),
            imageUrl: '/images/rainy.svg',
            lowTemp: tempertureReducer(weather.days[5].tempmin),
            weatherType: weather.days[5].conditions,
            setSuffix: getSuffix(metric),
          }
        ]} />
      </DashRightContainer>
    </DashContainer>
  );
}

export default Dashboard;
