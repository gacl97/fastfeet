import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalSytle from './styles/global';

import Routes from './routes/index';

const App: React.FC = () => (
  <Router>
    <Routes />
    <GlobalSytle />
  </Router>
);

export default App;
