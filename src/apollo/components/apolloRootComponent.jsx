import React, { Component } from "react";

import { ApolloProvider } from "react-apollo";
import ApolloTweeter from './apolloTweeeter';

// import ApolloClient from "apollo-boost"

// const client = new ApolloClient({
//   uri: 'https://localhost:3002/graphql',
//   clientState: {
//     defaults: {
//       isConnected: true,
//       ui: {
//         newTweet: {
//           body: ''
//         }
//       }
//     },
//     resolvers: {
//       Mutation: {
//         updateNetworkStatus: (_, { isConnected }, { cache }) => {
//           cache.writeData({ data: { isConnected } });
//           return null;
//         }
//       }
//     }
//   }
// });


import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-boost';
// import { InMemoryCache } from 'apollo-cache-inmemory';
 
const client = new ApolloClient({
  link: new HttpLink(),
  // cache: new InMemoryCache(),
});

export default class ApolloRootComponent extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ApolloTweeter />
      </ApolloProvider>
    );
  }
}




