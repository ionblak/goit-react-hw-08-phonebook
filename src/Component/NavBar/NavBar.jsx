import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

import Navigation from '../Navigation';
import AuthBar from '../AuthBar';
import UserMenu from '../UserMenu';

const NavBar = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <header>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthBar />}
    </header>
  );
};
export default NavBar;
