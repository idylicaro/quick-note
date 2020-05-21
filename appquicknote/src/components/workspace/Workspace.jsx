import React from 'react';
import 'rbx/index.css';
import {Box, Hero,Media,Content,Level} from 'rbx'
import Textarea from '../templates/Textarea';

export default () =>
<Hero.Body>
<Box>
  <Media>
    <Media.Item>
      <Content>
        <Textarea />
      </Content>
      <Level breakpoint="mobile">
        <Level.Item align="left">
          <Level.Item as="a" aria-label="email">
            {/* Email */}
          </Level.Item>
          <Level.Item as="a" aria-label="telegram">
            {/* Telegram */}
          </Level.Item>
          <Level.Item as="a" aria-label="download">
            {/* Download */}
          </Level.Item>
        </Level.Item>
      </Level>
    </Media.Item>
  </Media>
</Box>
</Hero.Body>
