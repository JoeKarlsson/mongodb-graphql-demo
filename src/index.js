import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HttpLink, InMemoryCache, ApolloClient } from 'apollo-boost';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from '@apollo/react-hooks';
import * as serviceWorker from './serviceWorker';
import ListPage from './components/ListPageContainer';
// import CreatePage from './components/CreatePageContainer';
// import DetailPage from './components/DetailPageContainer';
import 'tachyons';
import './index.css';

// Specify Your App ID and a Valid Access Token
const APP_ID = 'graphql-demo-ggcjz';
const ACCESS_TOKEN =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1Nzg5NjQyNzQsImlhdCI6MTU3ODk2MjQ3NCwiaXNzIjoiNWUxZDBlMmE4YWM5M2QzMGFjNDg0NzhiIiwic3RpdGNoX2RldklkIjoiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwIiwic3RpdGNoX2RvbWFpbklkIjoiNWUxY2M2NDEzNzE1YmQ3YWMxYzYxZGM1Iiwic3ViIjoiNWUxY2M5NTczNzE1YmQ3YWMxYzYyMjJjIiwidHlwIjoiYWNjZXNzIn0.d4_Wsq4O6nrbwmFDopsVCZOQzXY0q-30tpG3bKSaRcI';

// Add an Authorization header to each GraphQL request
const authLink = setContext((_, { headers }) => ({
	headers: {
		...headers,
		Authorization: `Bearer ${ACCESS_TOKEN}`,
	},
}));

// Connect Apollo to the GraphQL Endpoint
const GRAPHQL_URL = `https://stitch-dev.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`;
const httpLink = new HttpLink({ uri: GRAPHQL_URL });

// Instantiate the Apollo Client
const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<Router>
			<div>
				<Route exact path="/" component={ListPage} />
			</div>
		</Router>
	</ApolloProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
