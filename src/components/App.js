import React, { Fragment, useState } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ListPage from './ListPageContainer';
import CreatePage from './CreatePageContainer';
import DetailPage from './DetailPageContainer';
import Loading from './Loading';
import { useStitchAuth, initGraphQLClient } from '../stitch';

function InstaPostApp() {
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

	const [isLoading, setLoadingState] = useState(false);

	if (!isLoggedIn) {
		setLoadingState(true);
		handleAnonymousLogin();
	}

	return <Fragment>{isLoading ? <Loading /> : <InstaPostApp />}</Fragment>;
}

export default App;
