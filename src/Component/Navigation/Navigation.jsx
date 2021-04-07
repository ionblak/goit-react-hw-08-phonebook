import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
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
  const IsAuthenticated = useSelector(getIsAuthenticated);
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
      {IsAuthenticated && (
        <NavLink
          to={routes.contacts}
          className={classes.navLink}
          activeClassName={classes.isActive}
        >
          Contacts
        </NavLink>
      )}
    </>
  );
};
export default Navigation;
