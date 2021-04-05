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

const NavBar = () => {
  const classes = useStyles();
  return (
    <header>
      <NavLink
        exact
        to={routes.home}
        className={classes.navLink}
        activeClassName={classes.isActive}
      >
        Home
      </NavLink>
      <NavLink
        to={routes.contacts}
        className={classes.navLink}
        activeClassName={classes.isActive}
      >
        Contacts
      </NavLink>
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
        register
      </NavLink>
    </header>
  );
};
export default NavBar;
