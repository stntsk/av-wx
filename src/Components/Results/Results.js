import React from "react";
import Weather from "../Weather/Weather";
import Station from "../Station/Station";
import './Results.css';

const Results = ({metarSearchResults, tafSearchResults, stationSearchResults}) => {
    return (
        <div class='results'>
                <Weather metar={metarSearchResults} taf={tafSearchResults} />
                <Station station={stationSearchResults}/>    
        </div>
    )
}

export default Results