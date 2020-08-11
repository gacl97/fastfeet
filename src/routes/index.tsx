import React from 'react';
import { Switch } from 'react-router-dom';

import RouteAdmin from './RouteAdmin';
import Route from './Route';
import RouteDeliverer from './RouteDeliverer';

import signIn from '../pages/SignIn';

import Recipients from '../pages/Recipients';
import RecipientForm from '../pages/Recipients/RecipientForm';
import RecipientEditForm from '../pages/Recipients/RecipientEditForm';

import DeliveryProblems from '../pages/DeliveryProblems';

import Deliverymen from '../pages/Deliverymen';
import DeliverymenForm from '../pages/Deliverymen/DeliverymenForm';
import DeliverymenEditForm from '../pages/Deliverymen/DeliverymenEditForm';

import Orders from '../pages/Orders';
import OrdersForm from '../pages/Orders/OrdersForm';
import OrdersEditForm from '../pages/Orders/OrdersEditForm';
import Teste from '../pages/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={signIn} />

    <RouteAdmin path="/delivery/problems" component={DeliveryProblems} />

    <RouteAdmin path="/deliverymen" exact component={Deliverymen} />
    <RouteAdmin
      path="/deliverymen/create-deliverymen"
      component={DeliverymenForm}
    />
    <RouteAdmin
      path="/deliverymen/edit-deliverymen/:id"
      component={DeliverymenEditForm}
    />

    <RouteAdmin path="/orders" exact component={Orders} />
    <RouteAdmin path="/orders/create-order" component={OrdersForm} />
    <RouteAdmin path="/orders/edit-order/:id" component={OrdersEditForm} />

    <RouteAdmin path="/recipients" exact component={Recipients} />
    <RouteAdmin path="/recipients/create-recipient" component={RecipientForm} />
    <RouteAdmin
      path="/recipients/edit-recipient/:id"
      component={RecipientEditForm}
    />

    {/* <RouteAdmin
      path="ordersDeliverer"
      component={RecipientEditForm}
      isPrivate
    /> */}

    <RouteDeliverer path="/ordersDeliverer" exact component={Teste} />
  </Switch>
);

export default Routes;
