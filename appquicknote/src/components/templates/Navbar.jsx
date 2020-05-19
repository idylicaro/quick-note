import React from 'react';
import './sass/Navbar.scss';

export default () => (
  <nav
    className="navbar is-primary"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <a className="navbar-item">
        <img alt="Logo" />
      </a>
      <span className="navbar-burger burger" data-target="navbarMenuHeroA">
        <span />
        <span />
        <span />
      </span>
    </div>
    <div className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item is-active">
          Home
        </a>
        <a className="navbar-item">
          Workspace
        </a>
      </div>

      <div className="navbar-end">
        <a className="
        navbar-item"
        >
          Configuration
        </a>
      </div>
    </div>
  </nav>
);
