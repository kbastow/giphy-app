import React, { useContext, useLayoutEffect, useRef } from 'react';
import { AppContext } from '../context/AppContext';
import useFetchGifs from '../hooks/useFetchGifs';

const GifGrid = () => {
  const { state, dispatch } = useContext(AppContext);
  const { initialFetch } = useFetchGifs(dispatch);
  const hasFetched = useRef(false);

  useLayoutEffect(() => {
    if (!hasFetched.current) {
      initialFetch();
      hasFetched.current = true;
    }
  }, [initialFetch]);

  if (state.loading) {
    return <p>Loading GIFs...</p>;
  }

  if (state.gifs.length === 0) {
    return <p>No GIFs found.</p>;
  }

  return (
    <section className="gif-grid">
      {state.gifs.map((gif) => (
        <div key={gif.id} className="gif-item">
          <img src={gif.images.fixed_height.url} alt={gif.title} />
        </div>
      ))}
    </section>
  );
};

export default GifGrid;
