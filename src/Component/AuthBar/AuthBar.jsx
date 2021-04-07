import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  navLink: {
    color: 'black',
    marginRight: '20px',
  },
  isActive: {
    color: 'orange',
  },
});
const AuthBar = () => {
  const classes = useStyles();
  return (
    <>
      <NavLink
        to={routes.login}
        className={classes.navLink}
        activeClassName={classes.isActive}
      >
        Login
      </NavLink>
      <NavLink
        to={routes.register}
        className={classes.navLink}
        activeClassName={classes.isActive}
      >
        Register
      </NavLink>
    </>
  );
};

export default AuthBar;
