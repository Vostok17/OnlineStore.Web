import axios from 'axios';

const serviceUrl = `${process.env.REACT_APP_API_URL}/api/shoppingcart`;

class CartApi {
  static getProducts() {
    const url = serviceUrl;
    return axios.get(url);
  }

  static checkout(data) {
    console.log(data);
    const url = serviceUrl;
    return axios.post(url, data);
  }
}

export default CartApi;
