import delay from './delay';

const readData = [];

class CartApi {
  static getProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: readData });
      }, delay);
    });
  }

  static addProduct(data) {
    const product = readData.products.find(p => p.id === data.id);
    if (!product) {
      readData.products.push(data);
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: readData });
      }, delay);
    });
  }
}

export default CartApi;
