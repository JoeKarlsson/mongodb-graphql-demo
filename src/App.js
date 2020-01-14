import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import logo from './logo.svg';

function App() {
	const { loading, error, data } = useQuery(gql`
		query AllPostsQuery {
			instaposts {
				_id
				imageUrl
				description
			}
		}
	`);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<div className="App">
				{loading && <div>loading</div>}
				{error && <div>{`encountered an error: ${error}`}</div>}
				{data && (
					<div>{`successfully queried ${data.instaposts.description}`}</div>
				)}
			</div>
		</div>
	);
}

export default App;
