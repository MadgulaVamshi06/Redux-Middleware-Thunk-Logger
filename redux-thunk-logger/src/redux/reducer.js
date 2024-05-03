import { FETCH_COFFEE_SUCCESS, FETCH_FAILURE } from "./actiontype";

const initialState = {
  coffeeData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COFFEE_SUCCESS:
      return { ...state, coffeeData: action.payload };

    case FETCH_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export { reducer };
