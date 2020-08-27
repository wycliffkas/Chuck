import * as actionTypes from "../actions/actionTypes";

const intialState = {
  categories: [],
  joke: "",
  loading: false,
};

const categoryReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: action.categories,
        loading: false,
      };
    case actionTypes.FETCH_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.FETCH_JOKE_SUCCESS:
      return {
        ...state,
        joke: action.joke,
      };
    case actionTypes.FETCH_JOKE_FAIL:
      return state;
    case actionTypes.CLEAR_JOKE:
      return {
        ...state,
        joke: "",
      };
    case actionTypes.FETCH_CATEGORY_START:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
export default categoryReducer;
