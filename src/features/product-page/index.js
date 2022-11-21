import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaCartPlus } from 'react-icons/fa';
import Characteristics from './components/characteristic';
import './product-page.css';

const ProductPage = ({ productTitle, imgSrc, price, characteristics }) => {
  return (
    <Container className="product-page">
      <Row>
        <Col className="product-page__picture-and-price">
          <img src={imgSrc} alt="imgSrc" className="product-page__image" />
          <div className="product-page__price-and-button-wrapper">
            <span className="product-page__price">{price}₴</span>
            <button className="add-to-cart-button">
              <span>Add to cart</span>
              <FaCartPlus className="add-to-cart-button__icon" />
            </button>
          </div>
        </Col>
        <Col className="product-page__title-and-characteristics">
          <h2 className="product-page__product-title">{productTitle}</h2>
          <Characteristics values={characteristics} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
