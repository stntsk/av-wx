import React, {useState, useEffect} from "react";

const Results = (props) => {
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
            <p>
                METAR at {props.searchResults}
            </p>
        </div>
    )
}

export default Results