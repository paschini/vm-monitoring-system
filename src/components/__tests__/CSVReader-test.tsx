/** @format */

import CsvReader from '../CSVReader';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';

const testFile = '/resources/hostInfo.csv';
const TestComponent = <CsvReader file={testFile} />;

describe('CSV Reader', () => {
  test('the csv file loads', () => {
    const page = render(TestComponent);
    page.debug();
    expect(page.getByText('vm1')).toBeInTheDocument();
  });
});
