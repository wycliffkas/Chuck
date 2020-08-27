import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchJoke, clearJoke } from "../store/actions/";
import Joke from "../components/Joke";
import Loader from "../common/Loader";

const Category = () => {
  const currentState = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const [modal, setModal] = useState(false);

  const hideModal = () => {
    dispatch(clearJoke());
    setModal(false);
  };

  const fetchJokeHandler = (category) => {
    dispatch(fetchJoke(category));
    setModal(true);
  };

  const categories = currentState.categories.map((category) => (
    <div
      className="card text-center"
      key={category}
      onClick={() => fetchJokeHandler(category)}
    >
      <div className="card-body">{category}</div>
    </div>
  ));

  return (
    <div>
      <h4 className="main-title">Categories</h4>
      <div className="d-flex flex-row flex-wrap justify-content-between">
        {currentState.loading ? <Loader /> : categories}
      </div>
      <Joke onHideModal={hideModal} joke={currentState.joke} modal={modal} />
    </div>
  );
};

export default Category;
