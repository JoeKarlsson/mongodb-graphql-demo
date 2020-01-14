import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import modalStyle from '../constants/modalStyle';

class CreatePage extends Component {
	state = {
		description: '',
		imageUrl: '',
	};

	handlePost = async () => {
		const { description, imageUrl } = this.state;
		await this.props.createPost({
			variables: { description, imageUrl },
		});
		this.props.history.replace('/');
	};

	render() {
		return (
			<Modal
				isOpen
				contentLabel="Create Post"
				ariaHideApp={false}
				style={modalStyle}
				onRequestClose={this.props.history.goBack}
			>
				<div className="pa4 flex justify-center bg-white">
					<div style={{ maxWidth: 400 }} className="">
						{this.state.imageUrl && (
							<img src={this.state.imageUrl} alt="" className="w-100 mv3" />
						)}
						<input
							className="w-100 pa3 mv2"
							value={this.state.imageUrl}
							placeholder="Image Url"
							onChange={e => this.setState({ imageUrl: e.target.value })}
							autoFocus
						/>
						<input
							className="w-100 pa3 mv2"
							value={this.state.description}
							placeholder="Description"
							onChange={e => this.setState({ description: e.target.value })}
						/>
						{this.state.description && this.state.imageUrl && (
							<button
								className="pa3 bg-black-10 bn dim ttu pointer"
								onClick={this.handlePost}
							>
								Post
							</button>
						)}
					</div>
				</div>
			</Modal>
		);
	}
}

export default withRouter(CreatePage);
