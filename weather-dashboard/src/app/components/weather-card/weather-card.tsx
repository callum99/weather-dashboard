import React from 'react'
import CardTile from '../card-tile/card-tile';
import Image from 'next/image';
import {
  ImageContainer,
  DayOfWeekStyle,
  TempContainer,
  TempertureLow,
  TempertureHigh,
  WeatherTypeStyle
} from './weather-card.styled';


type WeatherCardProps = {
  dayOfWeek: string;
  imageUrl: string;
  weatherType: string;
  lowTemp: string;
  highTemp: string;
}
const WeatherCard = ({dayOfWeek, imageUrl, weatherType, lowTemp, highTemp}: WeatherCardProps) => {
  return (
    <CardTile>
      <DayOfWeekStyle>{dayOfWeek}</DayOfWeekStyle>
      <ImageContainer>
        <Image alt="Weather Icon" width="75" height="75" layout="responsive" src={imageUrl} />
      </ImageContainer>
      <WeatherTypeStyle>{weatherType}</WeatherTypeStyle>
      <TempContainer>
        <TempertureHigh>{highTemp}</TempertureHigh>
        <TempertureLow>{lowTemp}</TempertureLow>
      </TempContainer>
    </CardTile>
  );
}

export default WeatherCard;
