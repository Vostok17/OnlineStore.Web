import React, { useEffect } from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CartApi from '../../api/cartApi';
import ProductApi from '../../api/productApi';
import LoadingAnimation from '../../common/components/loading-animation';
import { addToShoppingCart } from '../shopping-cart-page/actions';
import { loadProduct, loadProductFail, loadProductSuccess } from './actions';
import './product-page.css';

const ProductPage = () => {
  const product = useSelector(state => state.product.data);
  const isLoading = useSelector(state => state.product.isLoading);
  const hasError = useSelector(state => state.product.hasError);
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
    const data = { id: product.id, title: product.title, imgSrc: product.imgSrc, price: product.price, quantity: 1 };
    dispatch(addToShoppingCart(data));
    await CartApi.addProduct(data);
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
              <img src={product.imgSrc} alt="imgSrc" className="product-page__image" />
              <div className="product-page__price-and-button-wrapper">
                <span className="product-page__price">{product.price}₴</span>
                <button className="add-to-cart-button" onClick={handleAddToCartClick}>
                  <span>Add to cart</span>
                  <FaCartPlus className="add-to-cart-button__icon" />
                </button>
              </div>
            </Col>
            <Col className="product-page__title-and-characteristics">
              <h2 className="product-page__product-title">{product.title}</h2>
              <h5>Screen</h5>
              <div>
                <span>Diagonal</span>
                <span>{product.screen.diagonal}</span>
              </div>
              <div>
                <span>Refresh rate</span>
                <span>{product.screen.refreshRate}</span>
              </div>
              <h5>Processor</h5>
              <div>
                <span>CPU</span>
                <span>{product.cpu.processor}</span>
              </div>
              <div>
                <span>Operating System</span>
                <span>{product.cpu.operatingSystem}</span>
              </div>
              <h5>RAM</h5>
              <div>
                <span>Amount of RAM</span>
                <span>{product.ram.amountOfRam}</span>
              </div>
              <h5>Storage</h5>
              <div>
                <span>SSD</span>
                <span>{product.storage.ssd}</span>
              </div>
              <h5>GPU</h5>
              <div>
                <span>Video card</span>
                <span>{product.gpu.videoCard}</span>
              </div>
              <h5>Network adapters</h5>
              <div>
                <span>Wi-Fi</span>
                <span>{product.networkAdapters.wifi}</span>
              </div>
              <div>
                <span>Bluetooth</span>
                <span>{product.networkAdapters.bluetooth}</span>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ProductPage;
