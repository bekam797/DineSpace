import React from 'react';

const Icons = (props) => (
  <i className={props.className} style={{ ...props.style }}>{props.IconType}</i>
);

export default Icons;
