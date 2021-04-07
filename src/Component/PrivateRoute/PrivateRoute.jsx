import { Redirect, Route } from 'react-router';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

const PrivateRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const IsAuthenticated = useSelector(getIsAuthenticated);
  return (
    <Route
      {...routeProps}
      render={props =>
        IsAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    />
  );
};

export default PrivateRoute;
