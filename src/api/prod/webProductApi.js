import axios from 'axios';

const serviceUrl = `${process.env.REACT_APP_API_URL}/api/productdetails`;

class ProductApi {
  static getProduct(id) {
    const url = `${serviceUrl}/${id}`;
    return axios.get(url);
  }
}

export default ProductApi;
