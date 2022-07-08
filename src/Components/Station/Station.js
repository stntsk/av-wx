import React from "react";

const Station = ({station}) => {
    return (
        <div>
            
            {station ? 
                <div> <h3>Station info: </h3>
                <ul>
                    <li>City: {station.city}</li> <br/>
                    <li>Country: {station.country}</li> <br/>
                    <li>Elevation: {station.elevation}</li> <br/>
                    <li>Coordinates: {station.coordinates}</li><br/>
                    <li>Name: {station.name}</li> <br/>
                    <li>Status: {station.status}</li> <br/>
                    <li>Timezone: {station.timezone}</li> <br/>
                    <li>Daylight saving time: {station.dst}</li>
                </ul>
                </div> : <p>Nothing to display</p>}
                
        </div>
    )
};

export default Station