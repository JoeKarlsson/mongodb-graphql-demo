import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const ADD_INSTAPOST = gql`
	mutation CreatePostMutation($data: InstapostInsertInput!) {
		insertOneInstapost(data: $data) {
			_id
			description
			imageUrl
		}
	}
`;

function CreatePage(props) {
	let imageUrl = { value: '' };
	let description = '';
	const [addPost] = useMutation(ADD_INSTAPOST);

	return (
		<form
			onSubmit={e => {
				e.preventDefault();

				// Invoke the mutation method and pass in the required variables
				addPost({
					variables: {
						data: {
							description: description.value,
							imageUrl: imageUrl.value,
						},
					},
				});
			}}
		>
			<input
				id="imageUrl"
				ref={url => {
					imageUrl = url;
				}}
			/>
			<input
				id="description"
				ref={str => {
					description = str;
				}}
			/>
			<button type="submit">Post</button>
		</form>
	);
}

export default CreatePage;
