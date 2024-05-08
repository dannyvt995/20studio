// store.js

import { createStore } from 'redux';

// Define the initial state
const initialState = {
  value: ''
};

// Define a reducer to handle state changes
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_VALUE':
      return {
        ...state,
        value: action.payload
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

export default store;
