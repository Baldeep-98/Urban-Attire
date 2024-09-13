import { ApolloClient,InMemoryCache } from "@apollo/client";
const client=new ApolloClient({
    uri:process.env.REACT_APP_GRAPHQL_URL||'http://localhost:4500/graphql',
    cache:new InMemoryCache()
});
export default client;