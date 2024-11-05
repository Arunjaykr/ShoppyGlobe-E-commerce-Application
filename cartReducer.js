import {
    FETCH_PRODUCTS,
    SET_LOADING,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    SET_PRODUCT_DETAIL,
    FILTER_PRODUCTS,
} from '../actions/cartActions';

const initialState = {
    products: [],
    loading: false,
    items: [],
    productDetail: {},
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { ...state, products: action.payload };
        case SET_LOADING:
            return { ...state, loading: action.payload };
        case ADD_TO_CART:
            return { ...state, items: [...state.items, action.payload] };
        case REMOVE_FROM_CART:
            return { ...state, items: state.items.filter(item => item.id !== action.payload) };
        case SET_PRODUCT_DETAIL:
            return { ...state, productDetail: action.payload };
        case FILTER_PRODUCTS:
            return { ...state, products: state.products.filter(product => product.title.toLowerCase().includes(action.payload.toLowerCase())) };
        default:
            return state;
    }
};

export default cartReducer;
