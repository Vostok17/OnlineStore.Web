import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { removeFromShoppingCart } from '../../actions';
import './product-in-cart.css';

const ProductInCart = ({ product, onCountChange }) => {
  const [count, setCount] = useState(product.quantity);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const dispatch = useDispatch();

  const increment = () => {
    onCountChange(product.price);
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    if (count <= 1) {
      setShowRemoveModal(true);
      return;
    }
    onCountChange(-product.price);
    setCount(prev => prev - 1);
  };

  const handleRemoveModalClose = () => setShowRemoveModal(false);
  const handleRemove = () => {
    dispatch(removeFromShoppingCart(product.id));
    handleRemoveModalClose();
  };

  return (
    <>
      <Row className="product-in-cart">
        <Col md={2} className="product-in-cart__image-wrapper">
          <img src={product.imgSrc} alt="laptop" />
        </Col>
        <Col md={5}>
          <h4 className="product-in-cart__title">{product.title}</h4>
        </Col>
        <Col md={3} className="product-in-cart__count-wrapper">
          <Button variant="success" onClick={increment} className="product-in-cart__button">
            <FiPlus className="product-in-cart__icon" />
          </Button>
          <span>{count}</span>
          <Button variant="danger" onClick={decrement} className="product-in-cart__button">
            <FiMinus className="product-in-cart__icon" />
          </Button>
        </Col>
        <Col md={2}>
          <span className="product-in-cart__price">{product.price * count}₴</span>
        </Col>
      </Row>
      <Modal show={showRemoveModal}>
        <Modal.Header>
          <Modal.Title>
            Do you want to remove <br /> {product.title}?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleRemoveModalClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleRemove}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductInCart;
