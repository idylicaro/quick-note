import React from 'react';
import './sass/Navbar.scss';

export default props =>
    (
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      
    </div>
    <div class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item">Home</a>
        </div>

        <div class="navbar-end">
            <a class="navbar-item">Configuration</a>
        </div>
    </div>
  </nav>
  )