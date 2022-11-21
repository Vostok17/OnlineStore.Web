import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import imgSrc from './common/assets/apple.jpg';
import Header from './common/components/header';
import HomePage from './features/home-page';
import ProductPage from './features/product-page';
import ShoppingCartPage from './features/shopping-cart-page';
import 'bootstrap/dist/css/bootstrap.min.css';

const test = {
  productTitle: 'Apple MacBook Air 13" M1 256GB',
  imgSrc: imgSrc,
  price: 31999,
  characteristics: [
    {
      kind: 'Screen',
      properties: { Diagonal: '13.3" (2560x1600) WQXGA', 'Refresh rate': '60 Hz' },
    },
    {
      kind: 'Processor',
      properties: { Processor: 'Octa-core Apple M1', 'Operating System': 'macOS Big Sur' },
    },
    {
      kind: 'RAM',
      properties: { 'Amount of RAM': '4 Gb' },
    },
    {
      kind: 'Storage',
      properties: { SSD: '256 Gb' },
    },
    {
      kind: 'Videocard',
      properties: { Videocard: 'Intergrated' },
    },
    {
      kind: 'Network adapters',
      properties: { 'Wi-Fi': '', Bluetooth: '5.0' },
    },
  ],
};

const productsInCartTest = [
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
            <ProductPage
              imgSrc={test.imgSrc}
              price={test.price}
              productTitle={test.productTitle}
              characteristics={test.characteristics}
            />
          </Route>
          <Route path="/cart">
            <ShoppingCartPage products={productsInCartTest} />
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
