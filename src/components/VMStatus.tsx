/** @format */

import React from 'react';
import CsvReader from './CSVReader';

function VmStatus(): JSX.Element {
  return (
    <div>
      This is the status:
      <CsvReader file={'/resources/hostInfo.csv'} />
    </div>
  );
}

export default VmStatus;
