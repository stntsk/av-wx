import './App.css';
import React, {useState} from 'react';
import Header from './Header/header';
import Searchbar from './Searchbar/Searchbar';
import Results from './Results/Results';
import CheckWX from './CheckWX/CheckWX';
import Footer from './Footer/footer'


function App() {

  const [metar, setMetar] = useState(null);
  const [taf, setTaf] = useState(null);
  const [station, setStation] = useState(null);

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

  const searchStation = (term) => {
    CheckWX.searchStation(term).then(stationSearchResults => {
      setStation(stationSearchResults);
    });
  };
  
  return (
    <div>
      <Header />
      <Searchbar onSearchMetar={searchMetar} onSearchTaf={searchTaf} onSearchStation={searchStation}/>
      <Results metarSearchResults={metar} tafSearchResults={taf} stationSearchResults={station}/>
      <Footer />
    </div>
  );
}

export default App;
