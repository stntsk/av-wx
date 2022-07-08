import React from "react";

const Results = ({metarSearchResults, tafSearchResults}) => {
    //const [stationWeathers, setStationWeather] = useState([])

    /*const addStationWeather = stationWeather => {
        setStationWeather((prev) => {
            [stationWeather, ...prev]
        });
    };*/

    //const station1 = props.searchResults[0].slice(0, 4);
    //const weather1 = props.searchResults[0].slice(5);

    return (
        <div>
            {metarSearchResults && tafSearchResults ? <p>METAR {metarSearchResults} <br/>{tafSearchResults}</p> : <p>Search for a station</p>}
        </div>
    )
}

export default Results