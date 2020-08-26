import React from 'react';

function Transformer(props) {

  return (
    <img
      className = 'transformer'
      src = {props.bot.url}
      alt = {props.bot.name}
    />
  );
}

export default Transformer;
