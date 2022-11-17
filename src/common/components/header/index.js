import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { MenuButton, Menu } from './components';
import './header.css';
import SearchImg from '../../assets/search.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Menu isOpen={isMenuOpen} />
      <Container fluid>
        <Row className="header">
          <Col md={3} className="header__title-bar">
            <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {console.log(isMenuOpen)}
            <h2 className="header__title">OnlineStore</h2>
          </Col>
          <Col md={6} className="header__search-bar">
            <form className="search-bar">
              <input
                type="text"
                placeholder="Search"
                className="search-bar__input"
              />
              <button type="submit" className="search-bar__button">
                <img src={SearchImg} className="search-bar__img" />
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
