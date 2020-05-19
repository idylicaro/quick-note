import React from 'react';
import './sass/Header.scss';
import Navbar from './Navbar';

export default () => (
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <h1 className="
        is-size-1
        has-text-light
        has-text-centered
        "
        >
          QuickNote
        </h1>
      </div>
    </div>
    <div className="hero-foot">
      <div className="container">
        <Navbar />
      </div>
    </div>
  </section>
);
