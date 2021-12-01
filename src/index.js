import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import Routes from './router';
import Curator from './components/Curator';
import Footer from './components/Footer';
import Places from './components/Places';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <div className="main__wrapper">
    <div className="main__container">
      <BrowserRouter>
        <Routes />
        <Places />
        <Curator />
      </BrowserRouter>
    </div>
    <Footer />
  </div>
  ,
  document.getElementById('root')
);