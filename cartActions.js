import axios from 'axios';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const SET_LOADING = 'SET_LOADING';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_PRODUCT_DETAIL = 'SET_PRODUCT_DETAIL';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';

export const fetchProducts = () => async (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });
    try {
        const response = await axios.get('https://dummyjson.com/products');
        dispatch({ type: FETCH_PRODUCTS, payload: response.data.products });
    } catch (error) {
        console.error('Failed to fetch products:', error);
    } finally {
        dispatch({ type: SET_LOADING, payload: false });
    }
};

export const fetchProductDetail = (id) => async (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });
    try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        dispatch({ type: SET_PRODUCT_DETAIL, payload: response.data });
    } catch (error) {
        console.error('Failed to fetch product detail:', error);
    } finally {
        dispatch({ type: SET_LOADING, payload: false });
    }
};

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    payload: id,
});

export const filterProducts = (query) => ({
    type: FILTER_PRODUCTS,
    payload: query,
});
