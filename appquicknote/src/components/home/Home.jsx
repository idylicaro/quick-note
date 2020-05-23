import React from 'react';
import 'rbx/index.css';
import { Message, Hero } from 'rbx';
import '../../mystyles.scss';

export default () => (

  <Hero.Body>
    <Message size="large" color="info">
      <Message.Header>
        <p>HOME</p>
      </Message.Header>
      <Message.Body>
        Let's go create an annotation!!
      </Message.Body>
    </Message>
  </Hero.Body>

);
