import React from 'react';
import { render } from '@testing-library/react';
import {jest, describe, it, xit} from "@jest/globals";
import expect from "expect";

import SearchBar from './search-bar';

describe('Components render', () => {
  xit('should render SearchBar component successfully', () => {
    const setState = jest.fn();
    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(initState => [initState, setState]);
    const { baseElement } = render(<SearchBar setLocation={setState}/>);
    expect(baseElement).toBeTruthy();
  });
});
