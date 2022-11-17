import React from 'react';
import ProductList from './components/product-list';
import { useHistory } from 'react-router-dom';

// Will be removed.
import laptopImg from '../../common/assets/laptop.jpg';
import acerImg from '../../common/assets/acer.jpg';
import appleImg from '../../common/assets/apple.jpg';

const productCards = [
  {
    title: 'ASUS Vivobook 15 X1502ZA-BQ641',
    imgSrc: laptopImg,
    price: '31 999',
  },
  {
    title: 'Acer Aspire 5 A515-45G-R9ML',
    imgSrc: acerImg,
    price: '26 999',
  },
  {
    title: 'Apple MacBook Air 13" M1 256GB',
    imgSrc: appleImg,
    price: '42 999',
  },
  {
    title: 'ASUS Vivobook 15 X1502ZA-BQ641',
    imgSrc: laptopImg,
    price: '31 999',
  },
  {
    title: 'Acer Aspire 5 A515-45G-R9ML',
    imgSrc: acerImg,
    price: '26 999',
  },
  {
    title: 'Apple MacBook Air 13" M1 256GB',
    imgSrc: appleImg,
    price: '42 999',
  },
  {
    title: 'ASUS Vivobook 15 X1502ZA-BQ641',
    imgSrc: laptopImg,
    price: '31 999',
  },
  {
    title: 'Acer Aspire 5 A515-45G-R9ML',
    imgSrc: acerImg,
    price: '26 999',
  },
];

const HomePage = () => {
  const history = useHistory();

  const redirectToProductPage = () => {
    history.push('/product_details');
  };

  return (
    <ProductList
      productCards={productCards}
      onClickHandler={redirectToProductPage}
    />
  );
};

export default HomePage;
