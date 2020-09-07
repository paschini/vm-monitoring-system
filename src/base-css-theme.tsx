/** @format */
import { createUseStyles } from 'react-jss';

export const globalStyles = createUseStyles({
  '@global': {
    body: {
      margin: 0,
      overflow: 'hidden',
      fontSize: 'calc(8px + 1vmin)',
      fontFamily: [
        '-apple-system',
        ' BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif'
      ]
    },
    code: {
      fontFamily: [
        'source-code-pro',
        'Menlo',
        'Monaco',
        'Consolas',
        'Courier New'
      ]
    }
  }
});

export const theme = {
  background: '#282a36',
  darkBackground: '#1D2228',
  primary: '#FF79C5',
  secondary: '#8BE9FD',
  error: '#ff5555',
  warning: '#ffb86c',
  highlight: '#f1fa8c',
  greenHighlight: '#50fa7b',
  color: 'white'
};
