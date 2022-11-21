import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FiMinus, FiPlus } from 'react-icons/fi';
import './product-in-cart.css';

const ProductInCart = ({ product, onCountChange }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    onCountChange(product.price);
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    if (count <= 1) {
      return;
    }
    onCountChange(-product.price);
    setCount(prev => prev - 1);
  };

  return (
    <div className="product-in-cart">
      <img src={product.imgSrc} alt="product-image" className="product-in-cart__image" />
      <h4 className="product-in-cart__title">{product.title}</h4>
      <div className="product-in-cart__count-wrapper">
        <Button variant="success" onClick={increment} className="product-in-cart__button">
          <FiPlus className="product-in-cart__icon" />
        </Button>
        <span className="product-in-cart__count">{count}</span>
        <Button variant="danger" onClick={decrement} className="product-in-cart__button">
          <FiMinus className="product-in-cart__icon" />
        </Button>
      </div>
      <span className="product-in-cart__price">{product.price * count}₴</span>
    </div>
  );
};

export default ProductInCart;
