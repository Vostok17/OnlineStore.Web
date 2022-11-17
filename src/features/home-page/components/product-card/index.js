import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import './product-card.css';

function ProductCard({ title, imgSrc, price, onClickHandler }) {
  return (
    <Card className="product-card">
      <div className="product-card__image">
        <Card.Img src={imgSrc} />
      </div>
      <Card.Body>
        <Card.Title className="product-card__title">{title}</Card.Title>
        <div className="product-card__info">
          <Card.Text className="product-card__price">{price}₴</Card.Text>
          <Button
            className="product-card__link"
            variant="primary"
            onClick={onClickHandler}
          >
            See more
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
