import gql from "graphql-tag";

// export const updateTweet = gql`
//   mutation updateTweet($text: String) {
//     newTweet(body: $text) @client
//   }  
// `;

export const postTweet = gql`
  mutation postTweet($text: String) {
    createTweet(body: $text) 
    ui @client {
      newTweet(body: '')
    }
  }
`;