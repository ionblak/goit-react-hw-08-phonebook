import { Switch, Redirect } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import routes from './routes';
import NavBar from './Component/NavBar';
import PrivateRoute from './Component/PrivateRoute';
import PublicRoute from './Component/PublicRoute';
import LoaderContainer from './Component/LoaderContainer';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './redux/auth/auth-operations';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-page" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "ContactsView" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "LoginView" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "RegisterView" */),
);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      <Suspense fallback={<LoaderContainer />}>
        <Switch>
          <PublicRoute exact path={routes.home} component={HomeView} />
          <PrivateRoute path={routes.contacts} component={ContactsView} />
          <PublicRoute
            path={routes.login}
            restricted
            component={LoginView}
            redirectTo={routes.contacts}
          />
          <PublicRoute
            path={routes.register}
            restricted
            component={RegisterView}
            redirectTo={routes.contacts}
          />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
