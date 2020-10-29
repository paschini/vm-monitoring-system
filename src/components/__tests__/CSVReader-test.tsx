/** @format */
import CsvReader from '../CSVReader';
import { render } from '@testing-library/react';
import React from 'react';

const testFile = '/resources/hostInfo.csv';
const TestComponent = <CsvReader file={testFile} />;

describe('CSV Reader', () => {
  test('the csv file loads', () => {
    const page = render(TestComponent);
    expect(page.getByText(/no data/i)).toBeInTheDocument();
    // TODO: fix test
  });
});
