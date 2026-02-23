import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: import.meta.env.VITE_API_URL,
    credentials: "include",
});

const authLink = setContext((_, { headers }) => ({
    headers: {
        ...headers,
    },
}));

export const client = new ApolloClient({
    link: authLink.concat(httpLink),

    // REQUIRED by Apollo, but effectively disabled
    cache: new InMemoryCache(),

    defaultOptions: {
        watchQuery: {
            fetchPolicy: "no-cache",
            errorPolicy: "all",
        },
        query: {
            fetchPolicy: "no-cache",
            errorPolicy: "all",
        },
        mutate: {
            errorPolicy: "all",
        },
    },
});
