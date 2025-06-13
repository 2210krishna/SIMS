import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        onSearch(newQuery); // Call onSearch directly here
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search by name"
                value={query}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBar;
