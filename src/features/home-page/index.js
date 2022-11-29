import React from 'react';
import { connect } from 'react-redux';
import ProductList from './components/product-list';

const HomePage = ({ productCards }) => <ProductList productCards={productCards} />;

export default connect(state => ({ productCards: state.home.data.productCards }))(HomePage);
