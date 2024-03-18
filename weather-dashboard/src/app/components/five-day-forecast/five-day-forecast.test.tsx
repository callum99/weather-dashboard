import React from 'react';
import { render } from '@testing-library/react';
import {jest, describe, it, xit} from "@jest/globals";
import expect from "expect";

import FiveDayForeCast from './five-day-forecast';

describe('Components render', () => {
  xit('should render FiveDayForeCast component successfully', () => {
    const { baseElement } = render(<FiveDayForeCast weatherData={[
      {
        dayOfWeek: "Tue, 24 March",
        highTemp: "10",
        imageUrl: 'https:google.com',
        lowTemp: "2",
        weatherType: "Rainy",
        setSuffix: "°C"
      }]}/>);
    expect(baseElement).toBeTruthy();
  });
});
