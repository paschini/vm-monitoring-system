/** @format */

import React, { useState, useEffect } from 'react';
import { useCSV } from '../common/hooks';

function CsvReader(): JSX.Element {
  const content = useCSV('/resources/test.csv');
  const [data, setData] = useState(['no data']);

  useEffect(() => {
    setData(content);
  }, [content]);

  return <div>{data}</div>;
}

export default CsvReader;
