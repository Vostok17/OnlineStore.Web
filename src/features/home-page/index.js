import React from 'react';
import { useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import HomeApi from '../../api/homeApi';
import LoadingAnimation from '../../common/components/loading-animation';
import ProductList from './components/product-list';
import { loadProductCards, loadProductCardsFail, loadProductCardsSuccess } from './actions';

const HomePage = () => {
  const productCards = useSelector(state => state.home.data.productCards);
  const isLoading = useSelector(state => state.home.isLoading);
  const hasError = useSelector(state => state.home.hasError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductCards());
    (async () => {
      try {
        const res = await HomeApi.getProductCards();
        dispatch(loadProductCardsSuccess(res.data));
      } catch (error) {
        dispatch(loadProductCardsFail());
      }
    })();
  }, [dispatch]);

  if (hasError) {
    return <Alert variant="danger">General server error!</Alert>;
  }

  return <>{isLoading ? <LoadingAnimation /> : <ProductList productCards={productCards} />}</>;
};

export default HomePage;
