import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetail } from '../redux/actions/cartActions';

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.cart.productDetail);
    const loading = useSelector((state) => state.cart.loading);

    useEffect(() => {
        dispatch(fetchProductDetail(id));
    }, [id, dispatch]);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="product-detail">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
};

export default ProductDetail;
