import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { DELETE_POST_MUTATION, POST_QUERY } from './graphql';
import DetailPage from './DetailPage';
import Loading from './Loading';

const DetailPageContainer = props => {
	const id = props.match.params.id;
	return (
		<Query query={POST_QUERY} variables={{ id }}>
			{({ loading, error, data }) => {
				if (loading) return <Loading />;
				if (error) return <p>`Error! ${error.message}`</p>;

				return (
					<Mutation mutation={DELETE_POST_MUTATION}>
						{deletePost => (
							<DetailPage {...data} {...props} deletePost={deletePost} />
						)}
					</Mutation>
				);
			}}
		</Query>
	);
};

export default DetailPageContainer;
