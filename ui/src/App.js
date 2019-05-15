import React from 'react';
import Products from './Products'
import Product from './Product'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/productpage.:id.html" component={Product} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
