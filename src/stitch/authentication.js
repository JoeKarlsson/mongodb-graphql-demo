import { AnonymousCredential } from 'mongodb-stitch-browser-sdk';
import { app } from './app.js';

export function loginAnonymous() {
	// Allow users to log in anonymously
	const credential = new AnonymousCredential();
	return app.auth
		.loginWithCredential(credential)
		.then(user => {
			console.log(`Logged in as anonymous user with id: ${user.id}`);
			return user;
		})
		.catch(console.error);
}

export function hasLoggedInUser() {
	// Check if there is currently a logged in user
	return app.auth.isLoggedIn;
}

export function getCurrentUser() {
	// Return the user object of the currently logged in user
	return app.auth.isLoggedIn ? app.auth.user : null;
}

export function logoutCurrentUser() {
	// Logout the currently logged in user
	const user = getCurrentUser();
	return app.auth.logoutUserWithId(user.id);
}
