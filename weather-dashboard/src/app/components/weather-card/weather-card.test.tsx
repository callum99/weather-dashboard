import React from 'react';
import { render } from '@testing-library/react';
import {jest, describe, it, xit} from "@jest/globals";
import expect from "expect";


import WeatherCard from './weather-card';

describe('Components render', () => {
  xit('should render WeatherCard component successfully', () => {
    const weatherData = {
      dayOfWeek: "Tue, 24 March",
      highTemp: "6",
      imageUrl: '/images/rainy.svg',
      lowTemp: "3",
      weatherType: "Rainy",
      setSuffix: "°C",
    };

    const { baseElement } = render(<WeatherCard
      dayOfWeek={weatherData.dayOfWeek}
      highTemp={weatherData.highTemp}
      imageUrl={weatherData.imageUrl}
      lowTemp={weatherData.lowTemp}
      weatherType={weatherData.weatherType}
      setSuffix={weatherData.setSuffix}
    />);
    expect(baseElement).toBeTruthy();
  });
});
