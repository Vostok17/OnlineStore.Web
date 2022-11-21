import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import SearchImg from '../../assets/search.png';
import { Menu, MenuButton } from './components';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuButtonClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <Menu isOpen={isMenuOpen} />
      <Container fluid>
        <Row className="header">
          <Col md={3} className="header__title-bar">
            <MenuButton isMenuOpen={isMenuOpen} onMenuButtonClick={handleMenuButtonClick} />
            <h2 className="header__title">OnlineStore</h2>
          </Col>
          <Col md={6} className="header__search-bar">
            <form className="search-bar">
              <input type="text" placeholder="Search" className="search-bar__input" />
              <button type="submit" className="search-bar__button">
                <img src={SearchImg} alt="search-img" className="search-bar__img" />
              </button>
            </form>
          </Col>
          <Col md={3} className="header__icons-bar">
            <BsFillPersonFill className="header__icon" />
            <FaShoppingCart className="header__icon" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
