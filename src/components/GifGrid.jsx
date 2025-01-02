import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const GifGrid = () => {
  const { state } = useContext(AppContext);

  // If loading, show a loading message or spinner
  if (state.loading) {
    return <p>Loading GIFs...</p>; // Placeholder for loading state
  }

  // If there are no GIFs to display, inform the user
  if (state.gifs.length === 0) {
    return <p>No GIFs found.</p>;
  }

  return (
    <div className="gif-grid">
      {state.gifs.map((gif) => (
        <div key={gif.id} className="gif-item">
          <img src={gif.images.fixed_height.url} alt={gif.title} />
        </div>
      ))}
    </div>
  );
};

export default GifGrid;
