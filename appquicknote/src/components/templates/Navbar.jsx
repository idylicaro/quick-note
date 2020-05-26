import React from 'react';
import './sass/Navbar.scss';
import 'rbx/index.css';
import { Navbar } from 'rbx';

export default () => (
  <Navbar color="info">
    <Navbar.Brand>
      <Navbar.Burger />
    </Navbar.Brand>
    <Navbar.Menu>
      <Navbar.Segment align="start">
        <Navbar.Item href="#/">Home</Navbar.Item>
        <Navbar.Item href="#/workspace" >Workspace</Navbar.Item>
      </Navbar.Segment>
    </Navbar.Menu>
  </Navbar>
);
