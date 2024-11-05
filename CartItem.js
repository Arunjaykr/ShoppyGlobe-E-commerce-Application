import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(item.id));
    };

    return (
        <div className="cart-item">
            <h2>{item.title}</h2>
            <p>Price: ${item.price}</p>
            <button onClick={handleRemoveFromCart}>Remove</button>
        </div>
    );
};

export default CartItem;
