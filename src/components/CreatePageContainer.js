import React from 'react';
import { Mutation } from 'react-apollo';
import { CREATE_POST_MUTATION } from './graphql';
import CreatePage from './CreatePage';

const CreatePageContainer = props => (
	<Mutation mutation={CREATE_POST_MUTATION}>
		{createPost => <CreatePage {...props} createPost={createPost} />}
	</Mutation>
);

export default CreatePageContainer;
