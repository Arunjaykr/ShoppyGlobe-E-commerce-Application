// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    // Get cart items from the Redux store
    const cartItems = useSelector((state) => state.cart.items);

    // Calculate the total quantity of items in the cart
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <header>
            <nav>
                <h1>ShoppyGlobe</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li>
                        <Link to="/cart">
                            Cart
                            {cartItemCount > 0 && (
                                <span className="cart-badge">{cartItemCount}</span>
                            )}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
