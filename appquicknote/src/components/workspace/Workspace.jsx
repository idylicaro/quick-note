import React, { Component } from 'react';
import 'rbx/index.css';
import {
  Box, Hero, Media, Content, Level,
} from 'rbx';
import iconTelegram from '../../imgs/telegram48.png';
import './Workspace.scss';
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
      <Hero.Body is-light is-bold>
        <Box>
          <Media>
            <Media.Item>
              <Level breakpoint="mobile">
                <Level.Item align="left">
                  <Level.Item as="a" aria-label="telegram">
                    {/* Telegram */}
                    <span><strong>Share:</strong></span>
                    <a href={`https://t.me/share/url?url=quicknote&text=${this.state.valueText}`}>
                      <img src={iconTelegram} alt="Telegram" />
                    </a>
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
