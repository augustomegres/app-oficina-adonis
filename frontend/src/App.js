import React from 'react';
import './App.css';
import Index from './pages/Index';
import Sellers from './pages/Sellers';
import Customers from './pages/Customers';
import Orders from './pages/Orders';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/clientes">
          <Customers />
        </Route>
        <Route exact path="/vendedores">
          <Sellers />
        </Route>
        <Route exact path="/pedidos">
          <Orders />
        </Route>

        <Route exact path="*">
          <div>404 - Página não encontrada</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
