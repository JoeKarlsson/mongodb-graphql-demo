import React from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';

const ListPage = props => {
	let blurClass = '';

	if (props.location.pathname !== '/') {
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

				{props.instaposts &&
					props.instaposts.map(post => (
						<Post
							key={post._id}
							post={post}
							refresh={() => props.instaposts.refetch()}
						/>
					))}
			</div>
			{props.children}
		</div>
	);
};

export default ListPage;
