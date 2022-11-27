import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import ProductInCart from './components/product-in-cart';
import './shopping-cart.css';

const calculateTotalPrice = products =>
  products.reduce((totalPrice, currentProduct) => totalPrice + currentProduct.price, 0);

const ShoppingCartPage = ({ products }) => {
  const [totalPrice, setTotalPrice] = useState(() => calculateTotalPrice(products));

  const handleTotalPriceChange = value => setTotalPrice(prev => prev + value);

  return (
    <Container className="shopping-cart">
      <div className="shopping-cart__products">
        {products.map((product, index) => (
          <div key={index}>
            <ProductInCart product={product} onCountChange={handleTotalPriceChange} />
          </div>
        ))}
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

export default connect(state => ({ products: state.shoppingCart }))(ShoppingCartPage);
