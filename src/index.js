import React from 'react';
import ReactDOM from 'react-dom';
import { StitchAuthProvider } from './stitch/StitchAuth';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import 'tachyons';
import './index.css';

ReactDOM.render(
	<StitchAuthProvider>
		<App />
	</StitchAuthProvider>,
	document.getElementById('root')
);

serviceWorker.unregister();
