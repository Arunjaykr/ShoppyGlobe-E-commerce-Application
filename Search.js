import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterProducts } from '../redux/actions/cartActions';
import '../styles/Search.css';


const Search = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(filterProducts(query));
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default Search;
