import React, { Fragment } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ListPage from './ListPageContainer';
import CreatePage from './CreatePageContainer';
import DetailPage from './DetailPageContainer';
import initGraphQLClient from '../stitch/graphql';
import { useStitchAuth } from '../stitch/StitchAuth';

function Login() {
	const { actions } = useStitchAuth();

	return (
		<button onClick={actions.handleAnonymousLogin}>
			Log In as a Guest User
		</button>
	);
}

function InstaPostApp() {
	const {
		isLoggedIn,
		actions: { handleAnonymousLogin },
	} = useStitchAuth();

	const client = initGraphQLClient();

	return (
		<ApolloProvider client={client}>
			<Router>
				<div>
					<Route exact path="/" component={ListPage} />
					<Route path="/post/:id" component={DetailPage} />
					<Route path="/create" component={CreatePage} />
				</div>
			</Router>
		</ApolloProvider>
	);
}

function App() {
	const {
		isLoggedIn,
		actions: { handleAnonymousLogin },
	} = useStitchAuth();

	handleAnonymousLogin();

	return <Fragment>{isLoggedIn ? <InstaPostApp /> : <Login />}</Fragment>;
}

export default App;
