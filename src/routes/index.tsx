import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

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

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={signIn} />

    <Route path="/delivery/problems" component={DeliveryProblems} isPrivate />

    <Route path="/deliverymen" exact component={Deliverymen} isPrivate />
    <Route
      path="/deliverymen/create-deliverymen"
      component={DeliverymenForm}
      isPrivate
    />
    <Route
      path="/deliverymen/edit-deliverymen/:id"
      component={DeliverymenEditForm}
      isPrivate
    />

    <Route path="/orders" exact component={Orders} isPrivate />
    <Route path="/orders/create-order" component={OrdersForm} isPrivate />
    <Route path="/orders/edit-order/:id" component={OrdersEditForm} isPrivate />

    <Route path="/recipients" exact component={Recipients} isPrivate />
    <Route
      path="/recipients/create-recipient"
      component={RecipientForm}
      isPrivate
    />
    <Route
      path="/recipients/edit-recipient/:id"
      component={RecipientEditForm}
      isPrivate
    />
  </Switch>
);

export default Routes;
