// import React, { Component } from "react";
// import { Grid, Row, Col, Well, Button, FormControl } from "react-bootstrap";
// import { Query } from "react-apollo";
// import { getUI } from "../graphql/queries";
// import { postTweet } from "../graphql/mutations";

// import { Spinner } from "./spinner";

// const MAX_TWEET_LENGTH = 150

// export default class ApolloTweetInput extends Component {
//   _handleButtonClicked = () => {
//     // this.props.tweetStore.publishNewTweet();
//   };

//   _handleTextAreaChanged = (value, writeData) => {
//     writeData({data: {ui: {newTweet: { body: value}}}});
//   };

//   render() {

//     return (
//       <Query query={getUI}>
//         {({ loading, error, data, client }) => {
//           let previewText = data.ui.newTweet.body || "Start typing below...";
//           let charCount = data.ui.newTweet.body.length;
//           let isOverLimit = charCount > MAX_TWEET_LENGTH;
//           let errorClass = isOverLimit ? "red" : "";
//           let buttonDisabled = isOverLimit || charCount == 0;

//           return <Row>
//             <Col md={9} className="col-centered">
//               <h3>Tweet Preview</h3>
//               <Well>{previewText}</Well>

//               <p>
//                 Character Count (Max {MAX_TWEET_LENGTH}): {charCount}
//               </p>
//               <textarea
//                 onChange={e => this._handleTextAreaChanged(e.target.value. client.writeData)}
//                 value={data.ui.newTweet.body}
//                 className={`form-control ${errorClass}`}
//                 rows="3"
//                 placeholder="Type here..."
//               />
//               <br />
//               <div className="pull-right">
//                 {loading ? (
//                   <Spinner />
//                 ) : (
//                   <Button
//                     onClick={this._handleButtonClicked}
//                     disabled={buttonDisabled}
//                     bsStyle="danger"
//                   >
//                     Tweet
//                   </Button>
//                 )}
//               </div>
//             </Col>
//           </Row>

//         }}
//       </Query>
//     );
//   }
// }
