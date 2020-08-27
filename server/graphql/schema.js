const { buildSchema } = require("graphql");

module.exports = buildSchema(`

type Joke {
  value: String
}

type RootQuery {
  getCategories: [String!]
  getJoke(category: String): Joke!
}

schema {
  query: RootQuery
}

`);

// module.exports = buildSchema(`

// type Joke {
//   value: String
// }

// type RootQuery {
//   getCategories: [String!]
//   getJoke(category: String): Joke!
// }

// schema {
//   query: RootQuery
// }

// `);
