import React, { Component } from 'react';
import './sass/Textarea.scss';

import 'rbx/index.css';

class Textarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.callbackGetText(event.target.value);
  }

  render() {
    return (
      <textarea onBlur={this.handleChange} placeholder="QuickNote" />
    );
  }
}

export default Textarea;
