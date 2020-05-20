import React from 'react';
import 'rbx/index.css';
import { Footer, Content } from 'rbx';

export default () => (
  <Footer>
    <Content textAlign="centered">
      <p>
        <strong>QuickNote</strong>
        {' '}
        by{' '}
        <a href="https://github.com/idylicaro"> Idyl Icaro</a>
        .
        The source code is released under the
        {' '}
        <a href="https://opensource.org/licenses/mit-license.php">
          MIT License
        </a>
        .
      </p>
    </Content>
  </Footer>
);
