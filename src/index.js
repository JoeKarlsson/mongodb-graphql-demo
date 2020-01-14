import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HttpLink, InMemoryCache, ApolloClient } from "apollo-boost";
import { setContext } from "apollo-link-context";
import { ApolloProvider } from "@apollo/react-hooks";
import * as serviceWorker from "./serviceWorker";

// Specify Your App ID and a Valid Access Token
const APP_ID = "graphql-demo-ggcjz";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1Nzg5NjI0MDcsImlhdCI6MTU3ODk2MDYwNywiaXNzIjoiNWUxZDA2ZGY4YWM5M2QzMGFjNDg0MDNlIiwic3RpdGNoX2RldklkIjoiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwIiwic3RpdGNoX2RvbWFpbklkIjoiNWUxY2M2NDEzNzE1YmQ3YWMxYzYxZGM1Iiwic3ViIjoiNWUxY2M5NTczNzE1YmQ3YWMxYzYyMjJjIiwidHlwIjoiYWNjZXNzIn0.MYScaDS1_LQLsDg9ln4txiHJJlqZbzICLczk4l3VyAM";

// Add an Authorization header to each GraphQL request
const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    Authorization: `Bearer ${ACCESS_TOKEN}`
  }
}));

// Connect Apollo to the GraphQL Endpoint
const GRAPHQL_URL = `https://stitch-dev.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`;
const httpLink = new HttpLink({ uri: GRAPHQL_URL });

// Instantiate the Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
