/** @format */

import React, { ReactElement } from 'react';
import CsvReader from './CSVReader';

function VmStatus(): ReactElement {
  return (
    <div>
      This is the status:
      <CsvReader file={'/resources/hostInfo.csv'} />
    </div>
  );
}

export default VmStatus;
