/** @format */

import { useEffect, useState } from 'react';

export function useCSV(file: string): string[][] {
  const [data, setData] = useState([['no data']]);

  useEffect(() => {
    const rawFile = new XMLHttpRequest();
    rawFile.open('GET', file, true);
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status === 0) {
          const content = rawFile.responseText
            .split('\n') // breaks lines on 'return'
            .filter((line) => line !== '') // removes empty lines (there's one at the EOF)
            .map((line) => line.split(',')); // breaks comma separated values into columns;
          setData(content); // breaks comma separated values into columns);
        }
      }
    };
    rawFile.send(null);
  }, [file]);

  return data;
}
