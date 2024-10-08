const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");

const GraphQLDate = new GraphQLScalarType({
  name: "GraphQLDate",
  description: "A date() type in a graphql as a scalar",
  serialize: (value) => value.toISOString(),
  parseLiteral: (ast) => {
    if (ast.kind === Kind.STRING) {
      const value = new Date(ast.value);
      return Number.isNaN(value.getTime()) ? undefined : value;
    }
    return undefined;
  },
  parseValue: (value) => {
    const value1 = new Date(value);
    return Number.isNaN(value1.getTime()) ? undefined : value1;
  },
});

module.exports = GraphQLDate;
