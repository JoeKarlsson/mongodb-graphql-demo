import { Stitch } from 'mongodb-stitch-browser-sdk';
import CONFIG from '../config.js';

const { APP_ID } = CONFIG;

const app = Stitch.hasAppClient(APP_ID)
	? Stitch.getAppClient(APP_ID)
	: Stitch.initializeAppClient(APP_ID, {
			baseUrl: 'https://stitch.mongodb.com',
	  });

export { app };
