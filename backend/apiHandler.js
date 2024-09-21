const GraphQLDate = require("./graphqlDate");
const user = require("./users");
const product = require("./products");
const { ApolloServer } = require('apollo-server');
const fs = require("fs");

const resolvers = {
    Query: {
      getUser: user.getUser, // Update the name to match the export from users.js
    },
    Mutation: {
      // Your mutation logic
    },
    GraphQLDate,
  };

const server = new ApolloServer({
  typeDefs: fs.readFileSync("./schema.graphql", "utf-8"),
  resolvers,
  formatError: (error) => {
    console.log(error);
    return error;
  },
});

function installHandler(PORT) {
  server.listen({ port: PORT }).then(({ url }) => {
    console.log(`Server is listening at PORT ${url}`);
  });
}

module.exports = { installHandler };
