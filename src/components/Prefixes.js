
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container } from 'react-bootstrap';



function PrefixView() {

  const [cardData, setCardData] = useState([]);
  const [visible, setVisible] = useState(1);

  const allCardData = async () => {
    const response = await axios.get("https://api.apispreadsheets.com/data/MZBaGSW88gjPEDuA/");
    const data = response.data;
    setCardData(data.results);
  }

  const loadData = () => {
    setVisible(visible +1);
  }

    useEffect(() => {
      allCardData();
    }, [])

    const renderCard = (word, index) => {
      return (
        <Container>
        <Card style={{width: "24rem"}} className="front">
          <Card.Body>
            <Card.Text>
              <h2>{word.root}</h2>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{width: "24rem"}} className="back hide">
        <Card.Body>
          <Card.Text>
            <h2>{word.prefix}</h2>
            <h2>{word.word}</h2>
          </Card.Text>
        </Card.Body>
      </Card>
      </Container>
      )
    }
    return (
      <div className="App">
        <div className="cards">

        </div>
        {cardData.map((visible, index).map(renderCard)}
        {visible < cardData.length && (
          <button onClick={loadData}>Load New Card</button>
        )}
        
       
       
      </div>
    )

  }

function Prefixes() {
  return (
    <PrefixView />
  )

}

  export default Prefixes;


// Grab data from API 
// Map over each item to push it into an Array
// Use math random to choose one item out of the Array
// Display this one item on a card
// Hide one of the two cards at all times - toggle back and forth