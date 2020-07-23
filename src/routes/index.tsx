import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import signIn from '../pages/SignIn';
import Orders from '../pages/Orders';
import Deliverymen from '../pages/Deliverymen';
import Recipients from '../pages/Recipients';
import DeliveryProblems from '../pages/DeliveryProblems';
import DeliverymenForm from '../pages/DeliverymenForm';
import RecipientForm from '../pages/RecipientForm';
import OrdersForm from '../pages/OrdersForm';
import OrdersEditForm from '../pages/OrdersEditForm';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={signIn} />
    <Route path="/orders" exact component={Orders} isPrivate />

    <Route path="/deliverymen" exact component={Deliverymen} isPrivate />
    <Route path="/recipients" exact component={Recipients} isPrivate />
    <Route path="/delivery/problems" component={DeliveryProblems} isPrivate />
    <Route
      path="/deliverymen/create-deliverymen"
      component={DeliverymenForm}
      isPrivate
    />
    <Route
      path="/deliverymen/create-deliverymen"
      component={DeliverymenForm}
      isPrivate
    />
    <Route
      path="/recipients/create-recipient"
      component={RecipientForm}
      isPrivate
    />

    <Route path="/orders/create-order" component={OrdersForm} isPrivate />
    <Route path="/orders/edit-order/:id" component={OrdersEditForm} isPrivate />
  </Switch>
);

export default Routes;
