import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ProductList from './components/product-list';

const HomePage = ({ productCards }) => {
  const history = useHistory();

  const redirectToProductPage = () => {
    history.push('/product_details');
  };

  return <ProductList productCards={productCards} onSeeMoreClick={redirectToProductPage} />;
};

export default connect(state => ({ productCards: state.productCards }))(HomePage);
