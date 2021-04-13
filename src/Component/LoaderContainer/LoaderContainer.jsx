import Loader from 'react-loader-spinner';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  LoaderContainer: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
});

const LoaderContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.LoaderContainer}>
      <Loader
        type="Circles"
        color="rgb(54, 140, 163)"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
};

export default LoaderContainer;
