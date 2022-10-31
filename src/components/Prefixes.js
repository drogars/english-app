
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PrefixCard = ({root, prefix, word}) => {
  return (
    <div className="card-container">
      <div className="front">
      <h2>{root}</h2>
      </div>
      <div className="back hide">
      <h1>{prefix}</h1>
      <h2>{word}</h2>
      </div>
    </div>
  )
}

function PrefixView() {

  const [prefixes, setPrefixes] = useState([]);

  useEffect(() => {
    const getWords = async function () {
      const apiUrl = '<https://api.apispreadsheets.com/data/MZBaGSW88gjPEDuA/>';
      const response = await axios.get(apiUrl);
      const data = response.data;
      console.log("data", data);

      let wordArray = [];
      for (let i=0; i < data.length; i++) {
        const index = Math.floor(Math.random() * data.length);
        wordArray.push(data[index]);
      }
      setPrefixes(wordArray);
    }
    getWords();
  }, [])

    return (
      <div>
        {prefixes.map((prefix, index) =>
        <PrefixCard
        key={index}
        root={prefix.root}
        prefix={prefix.prefix}
        word={prefix.word}
        />
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