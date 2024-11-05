import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/cartActions';
import ProductItem from './ProductItem';
import Search from './Search';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart.products);
    const loading = useSelector((state) => state.cart.loading);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <Search />
            <div className="product-list">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
