import { app } from './app';
import initGraphQLClient from './graphql';
import {
	loginAnonymous,
	logoutCurrentUser,
	hasLoggedInUser,
	getCurrentUser,
} from './authentication';
import { useStitchAuth, StitchAuthProvider } from './StitchAuth';

export { app };
export {
	loginAnonymous,
	logoutCurrentUser,
	hasLoggedInUser,
	getCurrentUser,
	StitchAuthProvider,
	useStitchAuth,
	initGraphQLClient,
};
