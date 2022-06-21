import { ApolloClient, InMemoryCache } from "@apollo/client";

export const cliente = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oaef0q1frv01xrgxj5aw95/master',
    cache: new InMemoryCache()
})