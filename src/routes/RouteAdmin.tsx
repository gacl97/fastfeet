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

const RouteAdmin: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { user, isAdmin } = useAuth();

  return (
    <ReactRouteDom
      {...rest}
      render={({ location }) => {
        if (user && isAdmin) {
          return <Component />;
        }
        if (user && !isAdmin) {
          return (
            <Redirect
              to={{
                pathname: '/availableOrders',
                state: location,
              }}
            />
          );
        }
        return (
          <Redirect
            to={{
              pathname: '/',
              state: location,
            }}
          />
        );
      }}
    />
  );
};

export default RouteAdmin;
