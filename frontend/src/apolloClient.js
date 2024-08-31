import { ApolloClient,InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
    uri:process.env.REACR_APP_GRAPHQL_URL||'http://localhost:4000/graphql',
    cache:new InMemoryCache()
});
export default client;