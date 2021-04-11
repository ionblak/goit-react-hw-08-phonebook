import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    margin: {
      right: 'auto',
      left: 'auto',
    },
    padding: '20px',
    width: '280px',
  },
  '@media (min-width: 720px)': {
    container: {
      width: 680,
    },
  },
  '@media (min-width: 1200px)': {
    container: {
      width: 1160,
    },
  },
});
const Container = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.container}>{children}</div>;
};

export default Container;
