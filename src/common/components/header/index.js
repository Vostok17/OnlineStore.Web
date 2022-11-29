import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SearchImg from '../../assets/search.png';
import LogInModal from '../auth';
import { Menu, MenuButton } from './components';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogInModal, setShowLogInModal] = useState(false);

  const handleMenuButtonClick = () => setIsMenuOpen(!isMenuOpen);

  const handleLogInShow = () => setShowLogInModal(true);
  const handleLogInClose = () => setShowLogInModal(false);

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
                <img src={SearchImg} alt="search" className="search-bar__img" />
              </button>
            </form>
          </Col>
          <Col md={3} className="header__icons-bar">
            <div className="header__icon-wrapper">
              <BsFillPersonFill className="header__icon" onClick={handleLogInShow} />
            </div>
            <Link to="/cart" className="header__icon-wrapper">
              <FaShoppingCart className="header__icon" />
            </Link>
          </Col>
        </Row>
      </Container>
      <LogInModal show={showLogInModal} onHide={handleLogInClose} onSubmit={handleLogInClose} />
    </>
  );
};

export default Header;
