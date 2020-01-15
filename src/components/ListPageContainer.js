import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ListPage from './ListPage';
import Loading from './Loading';

const FIND_ALL_INSTAPOSTS = gql`
	query {
		instaposts {
			_id
			description
			imageUrl
		}
	}
`;

function ListPageContainer(props) {
	const { loading, error, data } = useQuery(FIND_ALL_INSTAPOSTS, {
		pollInterval: 500,
	});

	return (
		<Fragment>
			{loading && <Loading />}
			{error && <div>{`encountered an error: ${error}`}</div>}
			{data && <ListPage {...data} {...props} />}
		</Fragment>
	);
}

export default ListPageContainer;
