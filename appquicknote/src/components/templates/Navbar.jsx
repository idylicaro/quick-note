import React from 'react';
import './sass/Navbar.scss';
import 'rbx/index.css';
import { Navbar } from 'rbx';

export default () => (
  <Navbar color="info">
    <Navbar.Brand>
      <Navbar.Item href="#">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          alt="Logo"
          role="presentation"
          width="112"
          height="28"
        />
      </Navbar.Item>
      <Navbar.Burger />
    </Navbar.Brand>
    <Navbar.Menu>
      <Navbar.Segment align="start">
        <Navbar.Item href="#/">Home</Navbar.Item>
        <Navbar.Item href="#/workspace" >Workspace</Navbar.Item>
      </Navbar.Segment>

      <Navbar.Segment align="end">
        <Navbar.Item>Configuration</Navbar.Item>
      </Navbar.Segment>
    </Navbar.Menu>
  </Navbar>
);
