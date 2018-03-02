import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Products from './Products'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'


ReactDOM.render((
		<Products />
	), document.getElementById('root'));
registerServiceWorker();
