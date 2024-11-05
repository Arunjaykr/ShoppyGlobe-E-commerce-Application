import axios from 'axios';

const API = axios.create({
    baseURL: 'https://dummyjson.com',
});

export const fetchProducts = async () => {
    const response = await API.get('/products');
    return response.data.products;
};

export const fetchProductDetail = async (id) => {
    const response = await API.get(`/products/${id}`);
    return response.data;
};
