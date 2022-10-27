import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

import { setContext } from "apollo-link-context";

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: "https://raw-graphql.herokuapp.com/graphql",
});

const authlink = setContext(async (req, { headers }) => {
  return {
    ...headers,
    headers: {
      apikey: "mysecretkey",
    },
  };
});

const link = authlink.concat(httpLink);

// const token = useSelector((state: RootState) => state.user.data?.token);

export const client = new ApolloClient({
  cache,
  link: link,
});
