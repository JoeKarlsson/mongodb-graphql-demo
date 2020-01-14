import React, { Component } from 'react';
import Modal from 'react-modal';
import modalStyle from '../constants/modalStyle';
import { withRouter } from 'react-router-dom';

const detailModalStyle = {
	overlay: modalStyle.overlay,
	content: {
		...modalStyle.content,
		height: 761,
	},
};

class DetailPage extends Component {
	handleDelete = async () => {
		await this.props.deletePost({
			variables: { id: this.props.Post.id },
		});
		this.props.history.replace('/');
	};

	render() {
		const { Post } = this.props;

		return (
			<Modal
				isOpen
				ariaHideApp={false}
				contentLabel="Create Post"
				style={detailModalStyle}
				onRequestClose={this.props.history.goBack}
			>
				<div
					className="close fixed right-0 top-0 pointer"
					onClick={this.props.history.goBack}
				>
					<img src={require('../assets/close.svg')} alt="" />
				</div>
				<div
					className="delete ttu white pointer fw6 absolute left-0 top-0 br2"
					onClick={this.handleDelete}
				>
					Delete
				</div>
				<div className="bg-white detail flex flex-column no-underline br2 h-100">
					<div
						className="image"
						style={{
							backgroundImage: `url(${Post.imageUrl})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							paddingBottom: '100%',
						}}
					/>
					<div className="flex items-center black-80 fw3 description">
						{Post.description}
					</div>
				</div>
			</Modal>
		);
	}
}

export default withRouter(DetailPage);
