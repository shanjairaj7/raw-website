import { ApolloProvider } from "@apollo/client";
import { client } from "../graphql/client";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
