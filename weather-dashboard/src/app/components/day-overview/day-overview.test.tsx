import React from 'react';
import { render } from '@testing-library/react';
import {jest, describe, it, xit} from "@jest/globals";
import expect from "expect";

import DayOverview from './day-overview';

describe('Components render', () => {
  xit('should render DayOverview component successfully', () => {
    const { baseElement } = render(<DayOverview
      humidity={"65"}
      maxTemp={"5"}
      minTemp={"1"}
      sunrise={"4:02:64"}
      sunset={"17:02:64"}
      cloudCover={"35"}
      setSuffix={"°C"}/>);
    expect(baseElement).toBeTruthy();
  });
});
