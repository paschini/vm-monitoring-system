/** @format */

import React, { ReactElement } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import VmStatus from './components/VMStatus';

const useStyles = createUseStyles({
  layout: {
    width: '100vw',
    height: '100vh',
    padding: '0.3em',
    textAlign: 'center',
    color: ({ theme }) => theme.color,
    backgroundColor: ({ theme }) => theme.background
  }
});

function Layout(): ReactElement {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.layout}>
      The whole page goes here
      <VmStatus />
    </div>
  );
}

export default Layout;
