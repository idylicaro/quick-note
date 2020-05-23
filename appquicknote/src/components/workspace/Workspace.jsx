import React, { Component } from 'react';
import 'rbx/index.css';
import {
  Box, Hero, Media, Content, Level,
} from 'rbx';
import Textarea from '../templates/Textarea';

class Workspace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueText: '',
    };
    this.setValueText = this.setValueText.bind(this);
  }

  setValueText(valueText) {
    this.setState({ valueText });
  }

  render() {
    return (
      <Hero.Body>
        <Box>
          <Media>
            <Media.Item>
              <Level breakpoint="mobile">
                <Level.Item align="left">
                  <Level.Item as="a" aria-label="email">
                    {/* Email */}
                    <button className="button is-dark">Emaill</button>
                  </Level.Item>
                  <Level.Item as="a" aria-label="telegram">
                    {/* Telegram */}
                    <button className="button is-dark">Telegram</button>
                  </Level.Item>
                  <Level.Item as="a" aria-label="download">
                    {/* Download */}
                    <button className="button is-dark">Download</button>
                  </Level.Item>
                </Level.Item>
              </Level>
              <Content>
                <Textarea callbackGetText={this.setValueText} />
              </Content>
            </Media.Item>
          </Media>
        </Box>
      </Hero.Body>
    );
  }
}
export default Workspace;
