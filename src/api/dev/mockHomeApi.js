import acerImg from '../../common/assets/acer.jpg';
import appleImg from '../../common/assets/apple.jpg';
import laptopImg from '../../common/assets/laptop.jpg';
import delay from './delay';

const readData = {
  productCards: [
    {
      id: 0,
      title: 'ASUS Vivobook 15 X1502ZA-BQ641',
      imgSrc: laptopImg,
      price: '31 999',
    },
    {
      id: 1,
      title: 'Acer Aspire 5 A515-45G-R9ML',
      imgSrc: acerImg,
      price: '26 999',
    },
    {
      id: 2,
      title: 'Apple MacBook Air 13" M1 256GB',
      imgSrc: appleImg,
      price: '42 999',
    },
    {
      id: 3,
      title: 'ASUS Vivobook 15 X1502ZA-BQ641',
      imgSrc: laptopImg,
      price: '31 999',
    },
    {
      id: 4,
      title: 'Acer Aspire 5 A515-45G-R9ML',
      imgSrc: acerImg,
      price: '26 999',
    },
    {
      id: 5,
      title: 'Apple MacBook Air 13" M1 256GB',
      imgSrc: appleImg,
      price: '42 999',
    },
    {
      id: 6,
      title: 'ASUS Vivobook 15 X1502ZA-BQ641',
      imgSrc: laptopImg,
      price: '31 999',
    },
    {
      id: 7,
      title: 'Acer Aspire 5 A515-45G-R9ML',
      imgSrc: acerImg,
      price: '26 999',
    },
  ],
};

class HomeApi {
  static getProductCards() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: readData });
      }, delay);
    });
  }

  static GetProductCardById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: { productCard: readData.productCards.find(p => p.id === id) } });
      }, delay);
    });
  }
}

export default HomeApi;
