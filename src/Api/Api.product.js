import { CATEGORY_URL, PRODUCT_URL } from "../util/constants";
import http from "./Api";

export const productApi = (params) => http.get(PRODUCT_URL, { params });

export const Category = () => http.get(CATEGORY_URL);

export const ProductDetailApi = (id) => http.get(`/product/${id}`);
