import React, { useEffect } from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductApi from '../../api/productApi';
import LoadingAnimation from '../../common/components/loading-animation';
import { addToShoppingCart } from '../shopping-cart-page/actions';
import { loadProduct, loadProductFail, loadProductSuccess } from './actions';
import './product-page.css';

const ProductPage = () => {
  const { data, isLoading, hasError } = useSelector(state => state.product);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProduct());
    (async () => {
      try {
        const res = await ProductApi.getProduct(id);
        dispatch(loadProductSuccess(res.data));
      } catch (error) {
        dispatch(loadProductFail());
      }
    })();
  }, [dispatch, id]);

  const handleAddToCartClick = async () => {
    const product = { id: data.id, title: data.title, imgSrc: data.imgSrc, price: data.price, quantity: 1 };
    dispatch(addToShoppingCart(product));
  };

  if (hasError) {
    return <Alert variant="danger">General server error!</Alert>;
  }

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <Container className="product-page">
          <Row>
            <Col className="product-page__picture-and-price">
              <img src={data.imgSrc} alt="imgSrc" className="product-page__image" />
              <div className="product-page__price-and-button-wrapper">
                <span className="product-page__price">{data.price}₴</span>
                <button className="add-to-cart-button" onClick={handleAddToCartClick}>
                  <span>Add to cart</span>
                  <FaCartPlus className="add-to-cart-button__icon" />
                </button>
              </div>
            </Col>
            <Col className="product-page__title-and-characteristics">
              <h2 className="product-page__product-title">{data.title}</h2>
              <h5>Screen</h5>
              <div>
                <span>Diagonal</span>
                <span>{data.screen.diagonal}</span>
              </div>
              <div>
                <span>Refresh rate</span>
                <span>{data.screen.refreshRate}</span>
              </div>
              <h5>Processor</h5>
              <div>
                <span>CPU</span>
                <span>{data.cpu.processor}</span>
              </div>
              <div>
                <span>Operating System</span>
                <span>{data.cpu.operatingSystem}</span>
              </div>
              <h5>RAM</h5>
              <div>
                <span>Amount of RAM</span>
                <span>{data.ram.amountOfRam}</span>
              </div>
              <h5>Storage</h5>
              <div>
                <span>SSD</span>
                <span>{data.storage.ssd}</span>
              </div>
              <h5>GPU</h5>
              <div>
                <span>Video card</span>
                <span>{data.gpu.videoCard}</span>
              </div>
              <h5>Network adapters</h5>
              <div>
                <span>Wi-Fi</span>
                <span>{data.networkAdapters.wifi}</span>
              </div>
              <div>
                <span>Bluetooth</span>
                <span>{data.networkAdapters.bluetooth}</span>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ProductPage;
