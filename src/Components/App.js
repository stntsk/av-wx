import './App.css';
import React, {useState} from 'react';
import Header from './Header/header';
import Searchbar from './Searchbar/Searchbar';
import Results from './Results/Results';
import CheckWX from './CheckWX/CheckWX';


function App() {

  const [metar, setMetar] = useState(null);
  const [taf, setTaf] = useState(null);

  const searchMetar = (term) => {
      CheckWX.searchMetar(term).then(metarSearchResults => {
          setMetar(metarSearchResults)
      });
  };

  const searchTaf = (term) => {
    CheckWX.searchTaf(term).then(tafSearchResults => {
      setTaf(tafSearchResults);
    });
  };
  
  return (
    <div>
      <Header />
      <Searchbar onSearchMetar={searchMetar} onSearchTaf={searchTaf}/>
      <Results metarSearchResults={metar} tafSearchResults={taf}/>
    </div>
  );
}

export default App;
