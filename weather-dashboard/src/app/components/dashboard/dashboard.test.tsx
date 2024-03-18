import React from 'react';
import { render } from '@testing-library/react';
import {jest, describe, it, xit} from "@jest/globals";
import expect from "expect";

import Dashboard from './dashboard;

describe('Components render', () => {
  xit('should render Dashboard component successfully', () => {
    const { baseElement } = render(<Dashboard/>);
    expect(baseElement).toBeTruthy();
  });
});
