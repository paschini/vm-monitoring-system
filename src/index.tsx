/** @format */

import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'react-jss';
import Layout from './Layout';
import { theme, globalStyles } from './base-css-theme';

const App = () => {
  globalStyles();

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
