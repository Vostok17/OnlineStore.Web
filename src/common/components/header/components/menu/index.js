import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = ({ isOpen }) => (
  <div className="menu" style={{ transform: `${isOpen ? 'translateX(0)' : 'translateX(-100%)'}` }}>
    <Link to="/">Home</Link>
    <Link to="/product_details">Product details</Link>
    <Link to="/cart">Cart</Link>
  </div>
);

export { Menu };
