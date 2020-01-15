import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HttpLink, InMemoryCache, ApolloClient } from 'apollo-boost';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from '@apollo/react-hooks';
import * as serviceWorker from './serviceWorker';
import ListPage from './components/ListPageContainer';
import CreatePage from './components/CreatePageContainer';
import DetailPage from './components/DetailPageContainer';
import { StitchAuthProvider, useStitchAuth } from "./components/StitchAuth";
import CONFIG from './config.js';
import 'tachyons';
import './index.css';

// Add an Authorization header to each GraphQL request
const authLink = setContext((_, { headers }) => ({
	headers: {
		...headers,
		Authorization: `Bearer ${CONFIG.ACCESS_TOKEN}`,
	},
}));

// Connect Apollo to the GraphQL Endpoint
const GRAPHQL_URL = `https://stitch-dev.mongodb.com/api/client/v2.0/app/${CONFIG.APP_ID}/graphql`;
const httpLink = new HttpLink({ uri: GRAPHQL_URL });

// Instantiate the Apollo Client
const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

function Login() {
	const { actions } = useStitchAuth();

	return (
		<button onClick={actions.handleAnonymousLogin}>Log In as a Guest User</button>
	)
}

function InstaPostApp() {
  return (
	<Router>
		<div>
			<Route exact path="/" component={ListPage} />
			<Route path="/post/:id" component={DetailPage} />
			<Route path="/create" component={CreatePage} />
		</div>
	</Router>
  );
}

function App() {
  const {
    isLoggedIn,
    actions: { handleLogout },
  } = useStitchAuth();

  return (
	<StitchAuthProvider>
		<ApolloProvider client={client}>
			{isLoggedIn ? <InstaPostApp /> : <Login />}
		</ApolloProvider>
	</ StitchAuthProvider>
  );
}

ReactDOM.render((
	<StitchAuthProvider>
		<App />
	</ StitchAuthProvider>), 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
