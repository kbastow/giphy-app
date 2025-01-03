import { useCallback, useRef } from 'react';
import { actionTypes } from '../reducers/appReducer';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const useFetchGifs = (dispatch) => {
  const hasFetched = useRef(false);

  const fetchGifs = useCallback(
    async (query = 'trending') => {
      dispatch({ type: actionTypes.SET_LOADING, payload: true });

      try {
        const url =
          query === 'trending'
            ? `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25`
            : `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=25`;

        const response = await fetch(url);
        const { data } = await response.json();
        dispatch({ type: actionTypes.SET_GIFS, payload: data });
      } catch (error) {
        dispatch({ type: actionTypes.SET_ERROR, payload: error.message });
      }
    },
    [dispatch]
  );

  const initialFetch = useCallback(() => {
    if (!hasFetched.current) {
      fetchGifs('trending');
      hasFetched.current = true;
    }
  }, [fetchGifs]);

  return { fetchGifs, initialFetch };
};

export default useFetchGifs;
