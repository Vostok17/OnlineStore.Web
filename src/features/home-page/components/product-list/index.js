import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductCard from '../product-card';
import './product-list.css';

const ProductList = ({ productCards, onSeeMoreClick }) => (
  <Container className="product-list">
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {productCards.map((card, index) => (
        <Col key={index} className="product-list__col">
          <ProductCard title={card.title} imgSrc={card.imgSrc} price={card.price} onSeeMoreClick={onSeeMoreClick} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default ProductList;
