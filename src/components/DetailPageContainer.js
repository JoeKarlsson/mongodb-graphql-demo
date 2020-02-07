import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import DetailPage from './DetailPage';
import Loading from './Loading';

function DetailPageContainer(props) {
	const id = props.match.params.id;

	const { loading, error, data } = useQuery(
		gql`
			{
				instapost(query: { _id: "${id}" }) {
					_id
					description
					imageUrl
				}
			}
		`
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
