import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ProductCard from '../product-card';
import './product-list.css';

const ProductList = ({ productCards, onClickHandler }) => {
  return (
    <Container className="product-list">
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {productCards.map((card, index) => (
          <Col key={index} className="product-list__col">
            <ProductCard
              title={card.title}
              imgSrc={card.imgSrc}
              price={card.price}
              onClickHandler={onClickHandler}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
