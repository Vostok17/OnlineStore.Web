import acerImg from '../../common/assets/acer.jpg';
import appleImg from '../../common/assets/apple.jpg';
import laptopImg from '../../common/assets/laptop.jpg';
import delay from './delay';

const readData = {
  products: [
    {
      id: 0,
      title: 'ASUS Vivobook 15 X1502ZA-BQ641',
      imgSrc: laptopImg,
      price: 31999,
      screen: {
        diagonal: '13.3" (2560x1600) WQXGA',
        refreshRate: '60 Hz',
      },
      cpu: {
        processor: 'Octa-core Apple M1',
        operatingSystem: 'macOS Big Sur',
      },
      ram: {
        amountOfRam: '4 Gb',
      },
      storage: {
        ssd: '256 Gb',
      },
      gpu: {
        videoCard: 'Integrated',
      },
      networkAdapters: {
        wifi: '',
        bluetooth: '5.0',
      },
    },
    {
      id: 1,
      title: 'Acer Aspire 5 A515-45G-R9ML',
      imgSrc: acerImg,
      price: 26999,
      screen: {
        diagonal: '13.3" (2560x1600) WQXGA',
        refreshRate: '60 Hz',
      },
      cpu: {
        processor: 'Octa-core Apple M1',
        operatingSystem: 'macOS Big Sur',
      },
      ram: {
        amountOfRam: '4 Gb',
      },
      storage: {
        ssd: '256 Gb',
      },
      gpu: {
        videoCard: 'Integrated',
      },
      networkAdapters: {
        wifi: '',
        bluetooth: '5.0',
      },
    },
    {
      id: 2,
      title: 'Apple MacBook Air 13" M1 256GB',
      imgSrc: appleImg,
      price: 42999,
      screen: {
        diagonal: '13.3" (2560x1600) WQXGA',
        refreshRate: '60 Hz',
      },
      cpu: {
        processor: 'Octa-core Apple M1',
        operatingSystem: 'macOS Big Sur',
      },
      ram: {
        amountOfRam: '4 Gb',
      },
      storage: {
        ssd: '256 Gb',
      },
      gpu: {
        videoCard: 'Integrated',
      },
      networkAdapters: {
        wifi: '',
        bluetooth: '5.0',
      },
    },
    {
      id: 3,
      title: 'ASUS Vivobook 15 X1502ZA-BQ641',
      imgSrc: laptopImg,
      price: 31999,
      screen: {
        diagonal: '13.3" (2560x1600) WQXGA',
        refreshRate: '60 Hz',
      },
      cpu: {
        processor: 'Octa-core Apple M1',
        operatingSystem: 'macOS Big Sur',
      },
      ram: {
        amountOfRam: '4 Gb',
      },
      storage: {
        ssd: '256 Gb',
      },
      gpu: {
        videoCard: 'Integrated',
      },
      networkAdapters: {
        wifi: '',
        bluetooth: '5.0',
      },
    },
    {
      id: 4,
      title: 'Acer Aspire 5 A515-45G-R9ML',
      imgSrc: acerImg,
      price: 26999,
      screen: {
        diagonal: '13.3" (2560x1600) WQXGA',
        refreshRate: '60 Hz',
      },
      cpu: {
        processor: 'Octa-core Apple M1',
        operatingSystem: 'macOS Big Sur',
      },
      ram: {
        amountOfRam: '4 Gb',
      },
      storage: {
        ssd: '256 Gb',
      },
      gpu: {
        videoCard: 'Integrated',
      },
      networkAdapters: {
        wifi: '',
        bluetooth: '5.0',
      },
    },
    {
      id: 5,
      title: 'Apple MacBook Air 13" M1 256GB',
      imgSrc: appleImg,
      price: 42999,
      screen: {
        diagonal: '13.3" (2560x1600) WQXGA',
        refreshRate: '60 Hz',
      },
      cpu: {
        processor: 'Octa-core Apple M1',
        operatingSystem: 'macOS Big Sur',
      },
      ram: {
        amountOfRam: '4 Gb',
      },
      storage: {
        ssd: '256 Gb',
      },
      gpu: {
        videoCard: 'Integrated',
      },
      networkAdapters: {
        wifi: '',
        bluetooth: '5.0',
      },
    },
    {
      id: 6,
      title: 'ASUS Vivobook 15 X1502ZA-BQ641',
      imgSrc: laptopImg,
      price: 31999,
      screen: {
        diagonal: '13.3" (2560x1600) WQXGA',
        refreshRate: '60 Hz',
      },
      cpu: {
        processor: 'Octa-core Apple M1',
        operatingSystem: 'macOS Big Sur',
      },
      ram: {
        amountOfRam: '4 Gb',
      },
      storage: {
        ssd: '256 Gb',
      },
      gpu: {
        videoCard: 'Integrated',
      },
      networkAdapters: {
        wifi: '',
        bluetooth: '5.0',
      },
    },
    {
      id: 7,
      title: 'Acer Aspire 5 A515-45G-R9ML',
      imgSrc: acerImg,
      price: 26999,
      screen: {
        diagonal: '13.3" (2560x1600) WQXGA',
        refreshRate: '60 Hz',
      },
      cpu: {
        processor: 'Octa-core Apple M1',
        operatingSystem: 'macOS Big Sur',
      },
      ram: {
        amountOfRam: '4 Gb',
      },
      storage: {
        ssd: '256 Gb',
      },
      gpu: {
        videoCard: 'Integrated',
      },
      networkAdapters: {
        wifi: '',
        bluetooth: '5.0',
      },
    },
  ],
};

class ProductApi {
  static getProduct(id) {
    const product = readData.products.find(p => p.id === Number(id));

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (product) {
          resolve({ data: product });
        } else {
          reject();
        }
      }, delay);
    });
  }
}

export default ProductApi;