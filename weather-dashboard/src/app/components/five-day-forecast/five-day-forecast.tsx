import React from 'react'
import { FiveDayForecastColumn, FiveDayForecastContainer, FiveDayForecastTitle } from './five-day-forecast.styled';
import WeatherCard from '../weather-card/weather-card';

type FiveDayForeCastProps = {
  weatherData: {
    dayOfWeek: string;
    highTemp: string;
    imageUrl: string;
    lowTemp: string;
    weatherType: string;
    setSuffix: string;
  }[]
}
const FiveDayForeCast = ({weatherData}: FiveDayForeCastProps) => {
  return (
    <>
      <FiveDayForecastTitle>5 Day Forecast</FiveDayForecastTitle>
      <FiveDayForecastContainer>
        {weatherData.map((day, index) => (
          <FiveDayForecastColumn key={index + 1}>
            <WeatherCard
              dayOfWeek={day.dayOfWeek}
              highTemp={`${day.highTemp}${day.setSuffix}`}
              imageUrl={day.imageUrl}
              lowTemp={`${day.lowTemp}${day.setSuffix}`}
              weatherType={day.weatherType}
            />
          </FiveDayForecastColumn>
        ))}
      </FiveDayForecastContainer>

    </>
  );
}

export default FiveDayForeCast;
