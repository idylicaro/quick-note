import React from 'react';
import 'rbx/index.css';
import {Box, Hero,Media,Content,Level} from 'rbx'
import Textarea from '../templates/Textarea';

export default () =>
<Hero.Body>
<Box>
  <Media>
    <Media.Item>
      <Level breakpoint="mobile">
        <Level.Item align="left">
          <Level.Item as="a" aria-label="email">
            {/* Email */}
            <button class="button is-dark">Emaill</button>
          </Level.Item>
          <Level.Item as="a" aria-label="telegram">
            {/* Telegram */}
            <button class="button is-dark">Telegram</button>
          </Level.Item>
          <Level.Item as="a" aria-label="download">
            {/* Download */}
            <button class="button is-dark">Download</button>
          </Level.Item>
        </Level.Item>
      </Level>
      <Content>
        <Textarea />
      </Content>
    </Media.Item>
  </Media>
</Box>
</Hero.Body>
