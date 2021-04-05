import { Route, Switch, Redirect } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

import routes from './routes';
import NavBar from './Component/NavBar';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const HomeView = lazy(() =>
  import(
    './views/HomeView' /* webpackChunkName: "home-page" */
  ),
);
const ContactsView = lazy(() =>
  import(
    './views/ContactsView' /* webpackChunkName: "ContactsView" */
  ),
);
const LoginView = lazy(() =>
  import(
    './views/LoginView' /* webpackChunkName: "LoginView" */
  ),
);
const RegisterView = lazy(() =>
  import(
    './views/RegisterView' /* webpackChunkName: "RegisterView" */
  ),
);

const App = () => {
  return (
    <div>
      <NavBar />
      <Suspense
        fallback={
          <Loader
            type="Rings"
            color="#FFF"
            height={80}
            width={80}
          />
        }
      >
        <Switch>
          <Route
            exact
            path={routes.home}
            component={HomeView}
          />
          <Route
            path={routes.contacts}
            component={ContactsView}
          />
          <Route
            path={routes.login}
            component={LoginView}
          />
          <Route
            path={routes.register}
            component={RegisterView}
          />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
