import React from 'react';
import './menu.css';

const Menu = ({ isOpen }) => {
  return (
    <div
      className="menu"
      style={{ transform: `${isOpen ? 'translateX(0)' : 'translateX(-100%)'}` }}
    >
      <a href="/">Home</a>
      <a href="/product_details">Product details</a>
      <a href="/cart">Cart</a>
    </div>
  );
};

export { Menu };
