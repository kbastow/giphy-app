export const initialState = {
  gifs: [],
  loading: false,
  error: null,
};

// Action types for easy reference
export const actionTypes = {
  SET_GIFS: 'SET_GIFS',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR', // If you need to handle errors in state
};

// Reducer function to handle state transitions based on action types
const appReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_GIFS:
      return { ...state, gifs: action.payload, loading: false }; // Stop loading after fetching
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload }; // Update the loading state
    case actionTypes.SET_ERROR:
      return { ...state, error: action.payload, loading: false }; // Stop loading on error
    default:
      return state;
  }
};

export default appReducer;
