import React from 'react';
import { Switch } from 'react-router-dom';

import RouteAdmin from './RouteAdmin';
import Route from './Route';
import RouteDeliverer from './RouteDeliverer';

import signIn from '../pages/SignIn';
// import NotFound from '../pages/NotFound';

// Admin Routes
import Recipients from '../pages/AdminPages/Recipients';
import RecipientForm from '../pages/AdminPages/Recipients/RecipientForm';
import RecipientEditForm from '../pages/AdminPages/Recipients/RecipientEditForm';

import DeliveryProblems from '../pages/AdminPages/DeliveryProblems';

import Deliverymen from '../pages/AdminPages/Deliverymen';
import DeliverymenForm from '../pages/AdminPages/Deliverymen/DeliverymenForm';
import DeliverymenEditForm from '../pages/AdminPages/Deliverymen/DeliverymenEditForm';

import Orders from '../pages/AdminPages/Orders';
import OrdersForm from '../pages/AdminPages/Orders/OrdersForm';
import OrdersEditForm from '../pages/AdminPages/Orders/OrdersEditForm';

// Deliverer Routes

import AvailableOrders from '../pages/DelivererPages/AvailableOrders';
import OrderDetails from '../pages/DelivererPages/OrderDetails';
import DelivererProfile from '../pages/DelivererPages/DelivererProfile';

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

    <RouteDeliverer path="/availableOrders" exact component={AvailableOrders} />
    <RouteDeliverer path="/details/:delivery_id" component={OrderDetails} />
    <RouteDeliverer path="/profile" component={DelivererProfile} />
  </Switch>
);

export default Routes;
