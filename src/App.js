import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MainView from './components/MainView';
//import Topics from './components/Topics';
import PrefixList from './components/PrefixList';
 


function Header() {
  return (
    <header className="App-header">
    <h1>English Conversation Games</h1>
  </header>
  )
}

// const SAMPLE_CARDS = [ {
//   id: 1,
//   root: "possible",
//   prefix: "im",
//   word: "impossible"
// }, {
//   id: 2,
//   root: "believable",
//   prefix: "un",
//   word: "unbelievable"
// }]




function App() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('https://api.apispreadsheets.com/data/MZBaGSW88gjPEDuA/') 
    .then((response) => {
      console.log(response.data);
      setCards(response.data);  
    })
  }, []);

  return (
    <div className="App">
      <Header />
     <MainView />
      <PrefixList prefixcards={cards} />
    </div>
  );
}

export default App;
