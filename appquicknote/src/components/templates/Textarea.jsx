import React from 'react';
import './sass/Textarea.scss';

export default props => (
  <textarea name={props.name} id={props.id} cols={props.cols} rows={props.rows} />
);
