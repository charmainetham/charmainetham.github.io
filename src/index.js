import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from '../components/App';
import style from '../assets/css/styles.css'

const title = "Charmaine's portfolio";
ReactDOM.render((
	  <BrowserRouter>
      <App />
    </BrowserRouter>),
	document.getElementById('app')
);
