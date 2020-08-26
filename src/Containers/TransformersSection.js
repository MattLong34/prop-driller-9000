import React, { Component } from 'react';
import Transformer from '../Components/Transformer'

function TransformersSection(props) {

  const displayBot = props.bots.map(bot => {
    return <Transformer bot={bot} />
  })
   
    return (
      <section className = "transformers-section">
        {displayBot}
      </section>
    );
}

export default TransformersSection;
