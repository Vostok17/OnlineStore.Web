import React from 'react';
import './menu-button.css';

const MenuButton = ({ isMenuOpen, onMenuButtonClick }) => {
  return (
    <div className="menu-button" onClick={() => onMenuButtonClick()}>
      <div
        style={{
          transform: `${isMenuOpen ? 'rotate(45deg)' : 'rotate(0)'}`,
        }}
      />
      <div
        style={{
          opacity: `${isMenuOpen ? '0' : '1'}`,
          transform: `${isMenuOpen ? 'translateX(20px)' : 'translateX(0)'}`,
        }}
      />
      <div
        style={{
          transform: `${isMenuOpen ? 'rotate(-45deg)' : 'rotate(0)'}`,
        }}
      />
    </div>
  );
};

export { MenuButton };
