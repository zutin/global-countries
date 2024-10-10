import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

function Provider({ children }: { children: React.ReactNode }) {
  const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/graphql',
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default Provider;