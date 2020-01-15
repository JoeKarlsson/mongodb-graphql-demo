import React from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';
import { useStitchAuth } from './StitchAuth';


const ListPage = (props) => {
	const {
		isLoggedIn,
		actions: { handleLogout, handleAnonymousLogin },
	} = useStitchAuth();

	let blurClass = '';

	if (props.location.pathname !== '/') {
		blurClass = ' blur';
	}

	return (
		<div className={'w-100 flex justify-center pa6' + blurClass}>
			<div className="w-100 flex flex-wrap" style={{ maxWidth: 1150 }}>

				

				<button className="ma3 box new-post br2 flex flex-column items-center justify-center ttu fw6 f20 black-30 no-underline" onClick={handleAnonymousLogin} >
					<img
						src={require('../assets/plus.svg')}
						alt=""
						className="plus mb3"
					/>
					<div>Log In as a Guest User</div>
				</button>

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
							key={post.id}
							post={post}
							refresh={() => props.instaposts.refetch()}
						/>
					))}

				{ isLoggedIn &&
					<button className="ma3 box new-post br2 flex flex-column items-center justify-center ttu fw6 f20 black-30 no-underline" onClick={handleLogout} >
						<img
							src={require('../assets/plus.svg')}
							alt=""
							className="plus mb3"
						/>
						<div>Log In as a Guest User</div>
					</button>
				}
			</div>
			{props.children}
		</div>
	);
};

export default ListPage;
