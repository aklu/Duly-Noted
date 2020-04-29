import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        //needs to be set to graphql server route. Make sure port value matches to project
        uri: "http://localhost:3030/",
    })
});

export default client;