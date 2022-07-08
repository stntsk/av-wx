import React from "react";


const Weather = ({metar, taf}) => {


    return (
        <div>
            {metar ? <p>METAR {metar}</p> : <p>Search for a station</p>}
            {taf && <p>{taf}</p>}
        </div>
    )
};

export default Weather