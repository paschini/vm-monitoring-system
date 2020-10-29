/** @format */

import React, { useState, useEffect, ReactElement } from 'react';
import { useCSV } from '../common/hooks';

type CSVReaderProps = {
  file: string;
};

function CsvReader(props: CSVReaderProps): ReactElement {
  const { file } = props;
  const content = useCSV(file);
  const [data, setData] = useState([['no data']]);

  useEffect(() => {
    setData(content);
  }, [content]);

  return <div>{data}</div>;
}

export default CsvReader;
