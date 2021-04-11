import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  authBar: {
    display: 'flex',
  },
  navLink: {
    color: 'black',
    marginRight: '10px',
  },
  isActive: {
    color: 'orange',
  },
});
const AuthBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.authBar}>
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
    </div>
  );
};

export default AuthBar;
