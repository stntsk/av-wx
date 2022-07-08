import React from "react";

const Results = ({metarSearchResults, tafSearchResults, stationSearchResults}) => {
    //const [stationWeathers, setStationWeather] = useState([])

    /*const addStationWeather = stationWeather => {
        setStationWeather((prev) => {
            [stationWeather, ...prev]
        });
    };*/

    //const station1 = props.searchResults[0].slice(0, 4);
    //const weather1 = props.searchResults[0].slice(5);
    //const [metar, setMetar] = useState('');
    
    return (
        <div>
            {metarSearchResults && tafSearchResults ? <p>METAR {metarSearchResults} <br/>{tafSearchResults}</p> : <p>Search for a station</p>}
                {stationSearchResults && <ul>
                    <li>City: {stationSearchResults.city}</li> <br/>
                    <li>Country: {stationSearchResults.country}</li> <br/>
                    <li>Elevation: {stationSearchResults.elevation}</li> <br/>
                    <li>Coordinates: {stationSearchResults.coordinates}</li><br/>
                    <li>Name: {stationSearchResults.name}</li> <br/>
                    <li>Status: {stationSearchResults.status}</li> <br/>
                    <li>Timezone: {stationSearchResults.timezone}</li> <br/>
                    <li>Daylight saving time: {stationSearchResults.dst}</li>
                </ul>}
               
        </div>
    )
}

export default Results