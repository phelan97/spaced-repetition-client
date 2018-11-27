import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { endpoint } from '../config';
import { setContext } from 'apollo-link-context';
import storageCheck from './storageCheck';


function createClient({ headers }) {
  const token = storageCheck();

  const authLink = setContext((_, { headers }) => {
    const token = storageCheck();
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
      }
    }
  })

  return new ApolloClient({
    // uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    uri: endpoint,
    clientState: {
      defaults: {},
      resolvers: {},
      typeDefs: ``,
    },
    uri: endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        },
      });
    },
  });
}

export default withApollo(createClient);