import './App.css';
//import { useState, useEffect } from 'react';
import MainView from './components/MainView';
import Topics from './components/Topics';
import Prefixes from './components/Prefixes';
 


function Header() {
  return (
    <header className="App-header">
    <h1>English Conversation Games</h1>
  </header>
  )
}


// function MainView() {
//   return (
//   <section className="main-container">
//     <ul>
//       <li><button className="main-button">Topics</button></li>
//       <li><button className="main-button">Taboo</button></li>
//       <li><button className="main-button">Questions</button></li>
//       <li><button className="main-button">Prefixes</button></li>
//       <li><button className="main-button">Phrasal Verbs</button></li>
//       <li><button className="main-button">Gerund or Infinitive?</button></li>
//       <li><button className="main-button">Presentations</button></li>
//       <li><button className="main-button">Emails</button></li>
//       <li><button className="main-button">Random Expressions</button></li>
//     </ul>
//   </section>
//   )
// }


function App() {

  return (
    <div className="App">
      <Header />
      <MainView />
      <Topics />
      <Prefixes />
      
    </div>
  );
}

export default App;
