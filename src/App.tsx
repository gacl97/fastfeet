import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalSytle from './styles/global';

import { AuthProvider } from './hooks/auth';

import Routes from './routes/index';

const App: React.FC = () => (
  <Router>
    <AuthProvider>
      <Routes />
    </AuthProvider>
    <GlobalSytle />
  </Router>
);

export default App;
