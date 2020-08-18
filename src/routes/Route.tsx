import React from 'react';
import {
  RouteProps as ReactRouteDomProps,
  Route as ReactRouteDom,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactRouteDomProps {
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  const { user, isAdmin } = useAuth();

  return (
    <ReactRouteDom
      {...rest}
      render={({ location }) => {
        return !user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isAdmin ? '/orders' : '/availableOrders',
              state: location,
            }}
          />
        );
      }}
    />
  );
};

export default Route;
