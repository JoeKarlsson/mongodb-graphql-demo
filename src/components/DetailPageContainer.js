import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import DetailPage from './DetailPage';
import Loading from './Loading';

function DetailPageContainer(props) {
	const _id = props.match.params._id;

	const { loading, error, data } = useQuery(
		gql`
			query PostsQuery {
				instapost {
					_id
					imageUrl
					description
				}
			}
		`,
		{
			variables: { _id },
		}
	);

	return (
		<div className="App">
			{loading && <Loading />}
			{error && <div>{`encountered an error: ${error}`}</div>}
			{data && <DetailPage {...data} {...props} />}
		</div>
	);
}

export default DetailPageContainer;
