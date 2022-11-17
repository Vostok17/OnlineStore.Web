import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './features/home-page';
import ShoppingCartPage from './features/shopping-cart-page';
import ProductPage from './features/product-page';
import Header from './common/components/header';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/product_details">
            <ProductPage />
          </Route>
          <Route path="/cart">
            <ShoppingCartPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
