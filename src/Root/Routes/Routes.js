import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../Pages/HomePage';

const routes = [
  { component: HomePage, exact: true, path: '/' }
];

export function Routes() {
  return (
    <Switch>
      {routes.map(route => (
        <Route {...route} key={route.path} />
      ))}
    </Switch>
  );
}

export default Routes;