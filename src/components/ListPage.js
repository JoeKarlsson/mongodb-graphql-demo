import React from 'react';
import { Link } from 'react-router-dom';
import Post from '../components/Post';

class ListPage extends React.Component {
	componentWillReceiveProps(nextProps) {
		if (this.props.location.key !== nextProps.location.key) {
			this.props.allPostsQuery.refetch();
		}
	}

	render() {
		let blurClass = '';
		if (this.props.location.pathname !== '/') {
			blurClass = ' blur';
		}

		return (
			<div className={'w-100 flex justify-center pa6' + blurClass}>
				<div className="w-100 flex flex-wrap" style={{ maxWidth: 1150 }}>
					<Link
						to="/create"
						className="ma3 box new-post br2 flex flex-column items-center justify-center ttu fw6 f20 black-30 no-underline"
					>
						<img
							src={require('../assets/plus.svg')}
							alt=""
							className="plus mb3"
						/>
						<div>New Post</div>
					</Link>
					{this.props.instaposts &&
						this.props.instaposts.map(post => (
							<Post
								key={post.id}
								post={post}
								refresh={() => this.props.instaposts.refetch()}
							/>
						))}
				</div>
				{this.props.children}
			</div>
		);
	}
}

export default ListPage;
