import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import App from '../components/App';

const title = "Charmaine's portfolio";

ReactDOM.render((
	  <HashRouter>
      <App />
    </HashRouter>),
	document.getElementById('app')
);
