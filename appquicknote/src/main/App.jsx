import React from 'react';
import './App.css';

import Header from '../components/templates/Header';
import Footer from '../components/templates/Footer';
import Textarea from '../components/templates/Textarea';

export default () => (
  <div className="app">
    <Header />
    <Textarea />
    <Footer />
  </div>
);
