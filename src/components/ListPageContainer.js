import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ListPage from './ListPage';
import Loading from './Loading';

function ListPageContainer(props) {
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
			{loading && <Loading />}
			{error && <div>{`encountered an error: ${error}`}</div>}
			{data && <ListPage {...data} {...props} />}
		</div>
	);
}

export default ListPageContainer;
