import React from 'react';
import { withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import modalStyle from '../constants/modalStyle';

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
	const [addPost, { data }] = useMutation(ADD_INSTAPOST);

	return (
		<Modal
			isOpen
			contentLabel="Create Post"
			ariaHideApp={false}
			style={modalStyle}
			onRequestClose={props.history.goBack}
		>
			<div className="pa4 flex justify-center bg-white">
				<div style={{ maxWidth: 400 }} className="">
					<form
						onSubmit={e => {
							e.preventDefault();

							addPost({
								variables: {
									data: {
										description: description.value,
										imageUrl: imageUrl.value,
									},
								},
							});
							props.history.replace('/');
						}}
					>
						{' '}
						<input
							className="w-100 pa3 mv2"
							id="imageUrl"
							ref={url => {
								imageUrl = url;
							}}
							placeholder="Image Url"
							autoFocus
						/>
						<input
							className="w-100 pa3 mv2"
							id="description"
							placeholder="Description"
							ref={str => {
								description = str;
							}}
						/>
						<button
							className="pa3 bg-black-10 bn dim ttu pointer"
							type="submit"
						>
							Post
						</button>
					</form>
				</div>
			</div>
		</Modal>
	);
}

export default withRouter(CreatePage);
