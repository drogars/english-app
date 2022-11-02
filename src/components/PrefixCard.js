
import React, { useState } from 'react';
//import { Card, Row, Col, Container } from 'react-bootstrap';
import './PrefixCard.css';

const PrefixCard = ({ prefixcard }) => {

  const [flip, setFlip] = useState(false);

  return (
      <div className="card-container">
          <div className= {`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
            <div className="front">
            {prefixcard.root}
            </div>    
            <div className="back">
            {prefixcard.word}
            </div>
          </div>
      </div>
    
  )
}

export default PrefixCard;




