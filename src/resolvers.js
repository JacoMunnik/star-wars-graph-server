module.exports = {
  Query: {
    people: (_, { page }, { dataSources }) => dataSources.starWarsAPI.getPeople(page),
    person: (_, { name }, { dataSources }) => dataSources.starWarsAPI.getPerson(name),
  },
};
