import React from 'react';
import { render } from '@testing-library/react';
import {jest, describe, it, xit} from "@jest/globals";

import ButtonGroup from './button-group';
import expect from "expect";

describe('Components render', () => {
  xit('should render ButtonGroup component successfully', () => {
    const setState = jest.fn();
    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce((initState) => [initState, setState]);
    const { baseElement } = render(<ButtonGroup  setMetric={setState}/>);
    expect(baseElement).toBeTruthy();
  });
});
