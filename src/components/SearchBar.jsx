import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import useFetchGifs from '../hooks/useFetchGifs';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { dispatch } = useContext(AppContext);
  const { fetchGifs, initialFetch } = useFetchGifs(dispatch);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchGifs(query);
  };

  const handleReset = () => {
    setQuery('');
    initialFetch();
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <div className="input-wrapper">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search GIFs"
          />
          {query && (
            <button
              type="button"
              className="reset-button"
              onClick={handleReset}
            >
              x
            </button>
          )}
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
