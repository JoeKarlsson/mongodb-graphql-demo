import React from 'react';
import ListPage from './ListPage';
import { Query } from 'react-apollo';
import { ALL_POSTS_QUERY } from './graphql';
import Loading from './Loading';

console.log(Query);

const ListPageContainer = props => (
	<Query query={ALL_POSTS_QUERY} pollInterval={500}>
		{({ loading, error, data }) => {
			if (loading) return <Loading />;
			if (error) return `Error! ${error.message}`;

			return <ListPage {...data} {...props} />;
		}}
	</Query>
);

export default ListPageContainer;
