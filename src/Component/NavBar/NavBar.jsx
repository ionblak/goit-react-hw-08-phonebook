import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

import Navigation from '../Navigation';
import AuthBar from '../AuthBar';
import UserMenu from '../UserMenu';
import Container from '../Container';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  header: {
    backgroundColor: 'rgb(54, 140, 163)',
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
});

const NavBar = () => {
  const classes = useStyles();
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.headerContainer}>
          <Navigation />
          {isAuthenticated ? <UserMenu /> : <AuthBar />}
        </div>
      </Container>
    </header>
  );
};
export default NavBar;
