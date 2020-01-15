import React from 'react';
import { withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import modalStyle from '../constants/modalStyle';

const detailModalStyle = {
	overlay: modalStyle.overlay,
	content: {
		...modalStyle.content,
		height: 761,
	},
};

const DELETE_INSTAPOST = gql`
	mutation deleteOneInstapost($data: InstapostQueryInput!) {
		deleteOneInstapost(query: $data) {
			_id
			description
			imageUrl
		}
	}
`;

function DetailPage(props) {
	const [deletePost, { data }] = useMutation(DELETE_INSTAPOST);
	const { instapost } = props;

	return (
		<Modal
			isOpen
			ariaHideApp={false}
			contentLabel="Create Post"
			style={detailModalStyle}
			onRequestClose={props.history.goBack}
		>
			<div
				className="close fixed right-0 top-0 pointer"
				onClick={props.history.goBack}
			>
				<img src={require('../assets/close.svg')} alt="" />
			</div>
			<div
				className="delete ttu white pointer fw6 absolute left-0 top-0 br2"
				onClick={e => {
					deletePost({
						variables: {
							data: {
								_id: instapost._id,
							},
						},
					});
					props.history.replace('/');
				}}
			>
				Delete
			</div>
			<div className="bg-white detail flex flex-column no-underline br2 h-100">
				<div
					className="image"
					style={{
						backgroundImage: `url(${instapost.imageUrl})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						paddingBottom: '100%',
					}}
				/>
				<div className="flex items-center black-80 fw3 description">
					{instapost.description}
				</div>
			</div>
		</Modal>
	);
}

export default withRouter(DetailPage);
