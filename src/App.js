import './App.css';
import React, {  useState } from 'react';
import PrefixList from './components/PrefixList';
 


function Header() {
  return (
    <header className="App-header">
    <h1>English Prefix Practice</h1>
  </header>
  )
}

const SAMPLE_CARDS = [ {
  "id": 1,
  "root": "able",
  "word": "unable",
  "prefix": "un"
},
{
  "id": 2,
  "root": "responsible",
  "word": "irresponsible",
  "prefix": "ir"
},
{
  "id": 3,
  "root": "do",
  "word": "undo",
  "prefix": "un"
},
{
  "id": 4,
  "root": "relevant",
  "word": "irrelevant",
  "prefix": "ir"
},
{
  "id": 5,
  "root": "direct",
  "word": "indirect",
  "prefix": "in"
},
{
  "id": 6,
  "root": "comfortable",
  "word": "uncomfortable",
  "prefix": "un"
},
{
  "id": 7,
  "root": "legal",
  "word": "illegal",
  "prefix": "il"
},
{
  "id": 8,
  "root": "expected",
  "word": "unexpected",
  "prefix": "un"
},
{
  "id": 9,
  "root": "patient",
  "word": "impatient",
  "prefix": "im"
},
{
  "id": 10,
  "root": "equal",
  "word": "unequal",
  "prefix": "un"
},
{
  "id": 11,
  "root": "literate",
  "word": "illiterate",
  "prefix": "il"
},
{
  "id": 12,
  "root": "complete",
  "word": "incomplete",
  "prefix": "in"
},
{
  "id": 13,
  "root": "polite",
  "word": "impolite",
  "prefix": "im"
},
{
  "id": 14,
  "root": "active",
  "word": "inactive",
  "prefix": "in"
},
{
  "id": 15,
  "root": "identified",
  "word": "unidentified",
  "prefix": "un"
},
{
  "id": 16,
  "root": "reliable",
  "word": "unreliable",
  "prefix": "un"
},
{
  "id": 17,
  "root": "reasonable",
  "word": "unreasonable",
  "prefix": "un"
},
{
  "id": 18,
  "root": "stable",
  "word": "unstable",
  "prefix": "un"
},
{
  "id": 19,
  "root": "secure",
  "word": "insecure",
  "prefix": "in"
},
{
  "id": 20,
  "root": "accurate",
  "word": "inaccurate",
  "prefix": "in"
},
{
  "id": 21,
  "root": "fair",
  "word": "unfair",
  "prefix": "un"
},
{
  "id": 22,
  "root": "aware",
  "word": "unaware",
  "prefix": "un"
},
{
  "id": 23,
  "root": "valid",
  "word": "invalid",
  "prefix": "in"
},
{
  "id": 24,
  "root": "effective",
  "word": "ineffective",
  "prefix": "in"
},
{
  "id": 25,
  "root": "logical",
  "word": "illogical",
  "prefix": "il"
},
{
  "id": 26,
  "root": "flexible",
  "word": "inflexible",
  "prefix": "in"
},
{
  "id": 27,
  "root": "cover",
  "word": "uncover",
  "prefix": "un"
},
{
  "id": 28,
  "root": "professional",
  "word": "unprofessional",
  "prefix": "un"
},
{
  "id": 29,
  "root": "accessible",
  "word": "inaccessible",
  "prefix": "in"
},
{
  "id": 30,
  "root": "common",
  "word": "uncommon",
  "prefix": "un"
},
{
  "id": 31,
  "root": "pure",
  "word": "impure",
  "prefix": "im"
},
{
  "id": 32,
  "root": "veil",
  "word": "unveil",
  "prefix": "un"
},
{
  "id": 33,
  "root": "friendly",
  "word": "unfriendly",
  "prefix": "un"
},
{
  "id": 34,
  "root": "conspicuous",
  "word": "inconspicuous",
  "prefix": "in"
},
{
  "id": 35,
  "root": "willing",
  "word": "unwilling",
  "prefix": "un"
},
{
  "id": 36,
  "root": "replaceable",
  "word": "irreplaceable",
  "prefix": "ir"
},
{
  "id": 37,
  "root": "rational",
  "word": "irrational",
  "prefix": "ir"
},
{
  "id": 38,
  "root": "sufficient",
  "word": "insufficient",
  "prefix": "in"
},
{
  "id": 39,
  "root": "precise",
  "word": "imprecise",
  "prefix": "im"
},
{
  "id": 40,
  "root": "efficient",
  "word": "inefficient",
  "prefix": "in"
},
{
  "id": 41,
  "root": "mature",
  "word": "immature",
  "prefix": "im"
},
{
  "id": 42,
  "root": "capable",
  "word": "uncapable",
  "prefix": "un"
},
{
  "id": 43,
  "root": "appropriate",
  "word": "inappropriate",
  "prefix": "in"
},
{
  "id": 44,
  "root": "legitimate",
  "word": "illegitimate",
  "prefix": "il"
},
{
  "id": 45,
  "root": "significant",
  "word": "insignificant",
  "prefix": "in"
},
{
  "id": 46,
  "root": "perfect",
  "word": "imperfect",
  "prefix": "im"
},
{
  "id": 47,
  "root": "regular",
  "word": "irregular",
  "prefix": "ir"
},
{
  "id": 48,
  "root": "fortunate",
  "word": "unfortunate",
  "prefix": "un"
},
{
  "id": 49,
  "root": "grateful",
  "word": "ungrateful",
  "prefix": "un"
},
{
  "id": 50,
  "root": "consistent",
  "word": "inconsistent",
  "prefix": "in"
},
{
  "id": 51,
  "root": "known",
  "word": "unknown",
  "prefix": "un"
},
{
  "id": 52,
  "root": "employed",
  "word": "unemployed",
  "prefix": "un"
},
{
  "id": 53,
  "root": "adequate",
  "word": "inadequate",
  "prefix": "in"
},
{
  "id": 54,
  "root": "possible",
  "word": "impossible",
  "prefix": "im"
},
{
  "id": 55,
  "root": "believable",
  "word": "unbelievable",
  "prefix": "un"
},
{
  "id": 56,
  "root": "clear",
  "word": "unclear",
  "prefix": "un"
},
{
  "id": 57,
  "root": "important",
  "word": "unimportant",
  "prefix": "un"
},
{
  "id": 58,
  "root": "justifiable",
  "word": "unjustifiable",
  "prefix": "un"
},
{
  "id": 59,
  "root": "reversible",
  "word": "irreversible",
  "prefix": "ir"
},
{
  "id": 60,
  "root": "achievable",
  "word": "unachievable",
  "prefix": "un"
},
{
  "id": 61,
  "root": "usual",
  "word": "unusual",
  "prefix": "un"
},
{
  "id": 62,
  "root": "certain",
  "word": "uncertain",
  "prefix": "un"
},
{
  "id": 63,
  "root": "cooperative",
  "word": "uncooperative",
  "prefix": "un"
}]


function App() {

  const [cards, setCards] = useState(SAMPLE_CARDS);


  //TRY AGAIN LATER WITH API
//   useEffect(() => {
//     axios.get('https://api.apispreadsheets.com/data/MZBaGSW88gjPEDuA/')
//     .then(response => {

//      setCards(response.data);
//      console.log(response.data)
//       .catch(setError);
// })}, [])


 


  return (
    <div className="App">
      <Header />
      
      <PrefixList prefixcards={cards} />
    </div>
  );
}

export default App;
