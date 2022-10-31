import './App.css';
//import { useState, useEffect } from 'react';
import Prefixes from './components/Prefixes';


function Header() {
  return (
    <header className="App-header">
    <h1>English Conversation Games</h1>
  </header>
  )
}
const buttons = ["Topics", "Taboo", "Questions", "Prefixes", "Phrasal Verbs", "Gerund or Infinitive", "Presentations", "Emails", "Random Expressions"];

const buttonObjects = buttons.map((button, i) => ({
  id: i,
  title: button
}));

function Main(props) {
  return (
  <section className="main-container">
    <ul>
      {props.buttons.map((button) => (
        <li key={button.id}><button className="main-button">{button.title}</button></li>
      ))}
    </ul>
  </section>
  )
}


function App() {

  return (
    <div className="App">
     <Header />
     <Main buttons={buttonObjects} />
     

    </div>
  );
}

export default App;
