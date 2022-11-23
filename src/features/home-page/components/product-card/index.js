import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './product-card.css';

const ProductCard = ({ title, imgSrc, price, onSeeMoreClick }) => (
  <Card className="product-card">
    <div className="product-card__image">
      <Card.Img src={imgSrc} />
    </div>
    <Card.Body>
      <Card.Title className="product-card__title">{title}</Card.Title>
      <div className="product-card__info">
        <Card.Text className="product-card__price">{price}₴</Card.Text>
        <Button className="product-card__link" variant="primary" onClick={onSeeMoreClick}>
          See more
        </Button>
      </div>
    </Card.Body>
  </Card>
);

export default ProductCard;
