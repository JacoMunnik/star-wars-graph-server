require("dotenv").config();

const { ApolloServer } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const StarWarsAPI = require("./datasources/StarWarsAPI");

const server = new ApolloServer({
  dataSources: () => ({
    starWarsAPI: new StarWarsAPI(),
  }),
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
      // options
      title: "Star wars API",
    }),
  ],
  introspection: true,
});

server.listen(process.env.PORT || 9000).then(() => {
  console.log("server running 🚀 http://localhost:9000");
});
