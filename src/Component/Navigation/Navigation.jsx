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

const Navigation = () => {
  const classes = useStyles();
  return (
    <>
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
    </>
  );
};
export default Navigation;
