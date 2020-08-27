import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchCategories = () => {
  return (dispatch) => {
    dispatch(fetchCategoriesStart());
    const graphqlQuery = {
      query: `
        { 
          getCategories
        }`,
    };
    axios({
      method: "post",
      url: "http://localhost:4000/graphql",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(graphqlQuery),
    })
      .then((res) => {
        return res.data;
      })
      .then((resData) => {
        dispatch(fetchCategoriesSuccess(resData.data.getCategories));
      })
      .catch((errors) => {
        dispatch(fetchCategoriesFail(errors));
      });
  };
};

export const fetchCategoriesSuccess = (categoriesResults) => {
  return {
    type: actionTypes.FETCH_CATEGORY_SUCCESS,
    categories: categoriesResults,
  };
};

export const fetchCategoriesFail = (error) => {
  return {
    type: actionTypes.FETCH_CATEGORY_FAIL,
    error: error,
  };
};

export const fetchJoke = (category) => {
  return (dispatch) => {
    const graphqlQuery = {
      query: `
      query GetJoke($category: String!) {
          getJoke(category:$category) {
            value
          }
        }`,
      variables: {
        category: category,
      },
    };
    axios({
      method: "post",
      url: "http://localhost:4000/graphql",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(graphqlQuery),
    })
      .then((res) => {
        return res.data;
      })
      .then((resData) => {
        dispatch(fetchJokeSuccess(resData.data.getJoke.value));
      })
      .catch((errors) => {
        dispatch(fetchJokeFail(errors));
      });
  };
};

export const fetchJokeSuccess = (joke) => {
  return {
    type: actionTypes.FETCH_JOKE_SUCCESS,
    joke: joke,
  };
};

export const fetchJokeFail = (error) => {
  return {
    type: actionTypes.FETCH_JOKE_FAIL,
    error: error,
  };
};

export const clearJoke = () => {
  return {
    type: actionTypes.CLEAR_JOKE,
  };
};

export const fetchCategoriesStart = () => {
  return {
    type: actionTypes.FETCH_CATEGORY_START,
  };
};
