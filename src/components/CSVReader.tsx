/** @format */

import React, { useState, useEffect } from 'react';
import { useCSV } from '../common/hooks';

type CSVReaderProps = {
  file: string;
};

function CsvReader(props: CSVReaderProps): JSX.Element {
  const { file } = props;
  const content = useCSV(file);
  const [data, setData] = useState(['no data']);

  useEffect(() => {
    console.log(content);
    setData(content);
  }, [content]);

  return <div>{data}</div>;
}

export default CsvReader;
