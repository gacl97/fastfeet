import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalSytle from './styles/global';

import { AuthProvider } from './hooks/auth';
import { OrderProvider } from './hooks/order';
import { DelivererProvider } from './hooks/deliverer';
import { RecipientProvider } from './hooks/recipient';

import Routes from './routes/index';

const App: React.FC = () => (
  <Router>
    <AuthProvider>
      <OrderProvider>
        <DelivererProvider>
          <RecipientProvider>
            <Routes />
          </RecipientProvider>
        </DelivererProvider>
      </OrderProvider>
    </AuthProvider>
    <GlobalSytle />
  </Router>
);

export default App;
