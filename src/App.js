import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import imgSrc from './common/assets/apple.jpg';
import Header from './common/components/header';
import HomePage from './features/home-page';
import ProductPage from './features/product-page';
import ShoppingCartPage from './features/shopping-cart-page';
import 'bootstrap/dist/css/bootstrap.min.css';

const product = {
  title: 'Apple MacBook Air 13" M1 256GB',
  imgSrc: imgSrc,
  price: 31999,
  screen: {
    diagonal: '13.3" (2560x1600) WQXGA',
    refreshRate: '60 Hz',
  },
  cpu: {
    processor: 'Octa-core Apple M1',
    operatingSystem: 'macOS Big Sur',
  },
  ram: {
    amountOfRam: '4 Gb',
  },
  storage: {
    ssd: '256 Gb',
  },
  gpu: {
    videoCard: 'Integrated',
  },
  networkAdapters: {
    wifi: '',
    bluetooth: '5.0',
  },
};

const productsInCart = [
  {
    imgSrc: imgSrc,
    title: 'Apple MacBook Air 13" M1 256GB',
    price: 31999,
  },
  {
    imgSrc: imgSrc,
    title: 'Apple MacBook Air 13" M1 256GB',
    price: 31999,
  },
  {
    imgSrc: imgSrc,
    title: 'Apple MacBook Air 13" M1 256GB',
    price: 31999,
  },
  {
    imgSrc: imgSrc,
    title: 'Apple MacBook Air 13" M1 256GB',
    price: 31999,
  },
  {
    imgSrc: imgSrc,
    title: 'Apple MacBook Air 13" M1 256GB',
    price: 31999,
  },
  {
    imgSrc: imgSrc,
    title: 'Apple MacBook Air 13" M1 256GB',
    price: 31999,
  },
];

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/product_details">
            <ProductPage product={product} />
          </Route>
          <Route path="/cart">
            <ShoppingCartPage products={productsInCart} />
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
