import React from 'react';
import './sass/Textarea.scss';

import 'rbx/index.css';

export default props => (

    <textarea name={props.name} id={props.id} cols={props.cols} rows={props.rows} />
  
);
