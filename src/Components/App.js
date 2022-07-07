import './App.css';
import React, {useState} from 'react';
import Header from './Header/header';
import Searchbar from './Searchbar/Searchbar';
import Results from './Results/Results';
import CheckWX from './CheckWX/CheckWX';


function App() {

  const [station, setStation] = useState(null);

  const search = (term) => {
      CheckWX.search(term).then(searchResults => {
          setStation(searchResults)
      });
  };
  
  return (
    <div>
      <Header />
      <Searchbar onSearch={search}/>
      <Results searchResults={station}/>
    </div>
  );
}

export default App;
