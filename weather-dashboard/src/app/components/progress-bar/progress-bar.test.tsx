import React from 'react';
import { render } from '@testing-library/react';
import {jest, describe, it, xit} from "@jest/globals";
import expect from "expect";

import ProgressBar from './progress-bar';

describe('Components render', () => {
  xit('should render ProgressBar component successfully', () => {
    const { baseElement } = render(<ProgressBar title={"testing"} barColour={"#ffdd00"} completion={"65%"} subTitle={"test"}/>);
    expect(baseElement).toBeTruthy();
  });
});
