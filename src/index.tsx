import React from 'react';
import {createRoot, Root} from 'react-dom/client';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import App from './App';
import './index.css';

const container: HTMLElement | null = document.getElementById('root');

if (container) {
	const root: Root = createRoot(container);
	root.render(
		<Provider store={store}>
			<App/>
		</Provider>
	);
}
