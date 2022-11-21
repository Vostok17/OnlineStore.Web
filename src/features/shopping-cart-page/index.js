import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import ProductInCart from './components/product-in-cart';
import './shopping-cart.css';

const calculateTotalPrice = products => {
  let price = 0;
  products.forEach(p => {
    price += p.price;
  });
  return price;
};

const ShoppingCartPage = ({ products }) => {
  const [totalPrice, setTotalPrice] = useState(() => calculateTotalPrice(products));

  const onCountChange = value => setTotalPrice(prev => prev + value);

  return (
    <Container className="shopping-cart">
      <div className="shopping-cart__products">
        {products.map((product, index) => {
          return (
            <div className="shopping-cart__product" key={index}>
              <ProductInCart product={product} onCountChange={onCountChange} />
            </div>
          );
        })}
      </div>
      <div className="shopping-cart__footer">
        <span className="shopping-cart__total-price">TOTAL: {totalPrice}₴</span>
        <Button variant="success" className="shopping-cart__checkout-button">
          Checkout
        </Button>
      </div>
    </Container>
  );
};

export default ShoppingCartPage;
