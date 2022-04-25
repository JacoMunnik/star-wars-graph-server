const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    people(page: Int): People
    person(name: String): People
  }


  type People {
    count: Int,
	  next: String,
	  previous: String,
	  results: [Person]
  }

  type Person {
    name: String,
    height: String,
		mass: String,
		hair_color: String,
		skin_color: String,
		eye_color: String,
		birth_year: String,
	  gender: String,
    homeworld: String,
    url: String,
  }
`;

module.exports = typeDefs;
