import React, { Component } from "react";
import { Grid, Row, Col, Well, Button, FormControl } from "react-bootstrap";

// import ApolloTweetInput from "./apolloTweetInput";
// import { ApolloTweet } from "./apolloTweet";
// import { Spinner } from "./spinner";

// import { Query } from "react-apollo";
// import { getTweets } from "../graphql/queries";


// export default class ApolloTweeeter extends Component {
//   _renderTweetList(tweets) {
//     const tweetList = tweets.map(tweet => (
//       <ApolloTweet key={tweet.id} tweet={tweet} />
//     ));
//     return (
//       <Row>
//         <Col md={12}>
//           <ul>{tweetList}</ul>
//         </Col>
//       </Row>
//     );
//   }

//   _renderSpinner() {
//     return (
//       <Row>
//         <Col md={1} className="col-centered">
//           <Spinner />
//         </Col>
//       </Row>
//     );
//   }

//   render() {
//     const { isFetching } = this.props.tweetStore;

//     return (
//       <Grid>
//         <a href="/" className="green">
//           <h1>Apollo Tweeeter</h1>
//         </a>
//         <br />
//         <ApolloTweetInput />
//         <hr />
//         {isFetching && this._renderSpinner()}
//         <Query query={getTweets}>
//           {({ loading, error, data }) => {
//             if (loading) return  this._renderSpinner();
//             if (error) return `Error! ${error.message}`;
//             this._renderTweetList(data.tweets);
//           }}
//         </Query>
//       </Grid>
//     );
//   }
// }

export default class ApolloTweeeter extends Component {
  render() {
    return <Grid></Grid>
  }
}