const axios = require("axios");

module.exports = {
  getCategories() {
    return axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then((res) => res.data)
      .catch((errors) => {
        console.log(errors);
      });
  },
  getJoke({ category }, req) {
    return axios
      .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((res) => res.data)
      .catch((errors) => {
        console.log(errors);
      });
  },
};
