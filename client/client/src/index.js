import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import style from './App.module.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <header>
        <Link to={'/'} className={style.logo}>
          <img src={logo} alt='home' width={40}/>
        </Link>
        <nav className={style.navigation}>
          <Link to={'/html'} className={style.html}>
            HTML
          </Link>
          <Link to={'/css'} className={style.css}>
            CSS
          </Link>
          <Link to={'/js'} className={style.js}>
            JS
          </Link>
        </nav>
      </header>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();