import gql from "graphql-tag";

export const getTweets = gql`
  allTweets {
    id
    body
  }
`;

export const getUI = gql`
  query {
    ui @client {
      {
        newTweet {
          body
        }
      }
    }
  }
`;