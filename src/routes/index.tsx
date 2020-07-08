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

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={signIn} />
    <Route path="/orders" component={Orders} />

    <Route path="/deliverymen" exact component={Deliverymen} />
    <Route path="/recipients" exact component={Recipients} />
    <Route path="/delivery/problems" component={DeliveryProblems} />
    <Route path="/deliverymen/create-deliverymen" component={DeliverymenForm} />
    <Route path="/deliverymen/create-deliverymen" component={DeliverymenForm} />
    <Route path="/recipients/create-recipient" component={RecipientForm} />
  </Switch>
);

export default Routes;
