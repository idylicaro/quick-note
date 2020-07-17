import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';

import Routes from './Routes';

import Header from '../components/templates/Header';
import Footer from '../components/templates/Footer';

export default () => (
  <HashRouter>

    <Header />
    <Routes />
    <Footer />

  </HashRouter>
);
