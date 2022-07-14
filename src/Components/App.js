import './App.css';
import React, {useState} from 'react';
import Header from './Header/header';
import Searchbar from './Searchbar/Searchbar';
import Results from './Results/Results';
import AvWX from './AvWX/AvWX';
import Footer from './Footer/footer'


function App() {

  const [metar, setMetar] = useState(null);
  const [taf, setTaf] = useState(null);
  const [station, setStation] = useState(null);

  const searchMetar = (term) => {
      setMetar('Request pending');
      AvWX.searchMetar(term).then(metarSearchResults => {
        setMetar(null);
          setMetar(metarSearchResults)
      });
  };

  const searchTaf = (term) => {
    setTaf('Request pending');
    AvWX.searchTaf(term).then(tafSearchResults => {
      setTaf(null);
      setTaf(tafSearchResults);
    });
  };

  const searchStation = (term) => {
    setStation(null);
    AvWX.searchStation(term).then(stationSearchResults => {
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
