/* eslint-disable no-useless-constructor */
import { BaseAPI } from "./baseApi";


class ProductAPI extends BaseAPI {
    constructor(baseURL) {
        super(baseURL);
    }

    getAllProducts = () => this.get('products');


}

export const productsApi = new ProductAPI(process.env.REACT_APP_API_PRODUCT_URL);