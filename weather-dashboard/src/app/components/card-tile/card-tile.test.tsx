import React from 'react';
import { render } from '@testing-library/react';
import {describe, xit} from "@jest/globals";
import expect from "expect";

import CardTile from './card-tile';

describe('Components render', () => {
  xit('should render CardTile component successfully', () => {
    const { baseElement } = render(<CardTile/>);
    expect(baseElement).toBeTruthy();
  });
});
