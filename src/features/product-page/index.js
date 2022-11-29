import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaCartPlus } from 'react-icons/fa';
import { connect } from 'react-redux';
import { addToShoppingCart } from '../shopping-cart-page/actions';
import './product-page.css';

const ProductPage = ({ product, ...props }) => {
  const handleAddToCartClick = () => {
    props.addToShoppingCart({
      id: product.id,
      title: product.title,
      imgSrc: product.imgSrc,
      price: product.price,
    });
  };

  return (
    <Container className="product-page">
      <Row>
        <Col className="product-page__picture-and-price">
          <img src={product.imgSrc} alt="imgSrc" className="product-page__image" />
          <div className="product-page__price-and-button-wrapper">
            <span className="product-page__price">{product.price}₴</span>
            <button className="add-to-cart-button" onClick={handleAddToCartClick}>
              <span>Add to cart</span>
              <FaCartPlus className="add-to-cart-button__icon" />
            </button>
          </div>
        </Col>
        <Col className="product-page__title-and-characteristics">
          <h2 className="product-page__product-title">{product.title}</h2>
          <h5>Screen</h5>
          <div>
            <span>Diagonal</span>
            <span>{product.screen.diagonal}</span>
          </div>
          <div>
            <span>Refresh rate</span>
            <span>{product.screen.refreshRate}</span>
          </div>
          <h5>Processor</h5>
          <div>
            <span>CPU</span>
            <span>{product.cpu.processor}</span>
          </div>
          <div>
            <span>Operating System</span>
            <span>{product.cpu.operatingSystem}</span>
          </div>
          <h5>RAM</h5>
          <div>
            <span>Amount of RAM</span>
            <span>{product.ram.amountOfRam}</span>
          </div>
          <h5>Storage</h5>
          <div>
            <span>SSD</span>
            <span>{product.storage.ssd}</span>
          </div>
          <h5>GPU</h5>
          <div>
            <span>Video card</span>
            <span>{product.gpu.videoCard}</span>
          </div>
          <h5>Network adapters</h5>
          <div>
            <span>Wi-Fi</span>
            <span>{product.networkAdapters.wifi}</span>
          </div>
          <div>
            <span>Bluetooth</span>
            <span>{product.networkAdapters.bluetooth}</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default connect(state => ({ product: state.product.data.details }), { addToShoppingCart })(ProductPage);
