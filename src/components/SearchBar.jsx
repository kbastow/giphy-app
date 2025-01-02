import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { actionTypes } from '../reducers/appReducer';

const SearchBar = () => {
  const [query, setQuery] = useState(''); // Local state for query input
  const { dispatch, state } = useContext(AppContext); // Access dispatch and state from context

  const handleSearch = async (event) => {
    event.preventDefault();

    if (!query) return; // Exit if search input is empty

    console.log('Fetching GIFs for:', query);

    // Dispatch loading action
    dispatch({ type: actionTypes.SET_LOADING, payload: true });
    dispatch({ type: actionTypes.SET_ERROR, payload: null }); // Clear previous errors

    try {
      const apiKey = import.meta.env.VITE_GIPHY_API_KEY; // Fetch from environment variable
      console.log('Using API Key:', apiKey);

      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=25`
      );
      const data = await response.json();

      if (response.ok) {
        console.log('Data fetched successfully:', data);
        dispatch({ type: actionTypes.SET_GIFS, payload: data.data }); // Update GIFs in context
      } else {
        throw new Error('Failed to fetch GIFs');
      }
    } catch (error) {
      console.error('Error fetching GIFs:', error);
      dispatch({ type: actionTypes.SET_ERROR, payload: error.message }); // Dispatch error
    } finally {
      dispatch({ type: actionTypes.SET_LOADING, payload: false }); // Set loading to false after fetching
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query state on input change
        placeholder="Search for GIFs"
      />
      <button type="submit" disabled={state.loading}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
