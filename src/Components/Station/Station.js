import React from "react";

const Station = ({station}) => {
    return (
        <div>
            
            {station ? 
                <div> <h3>Station info: </h3>
                <ul>
                    <li>City: {station.city}</li> <br/>
                    <li>Country: {station.country}</li> <br/>
                    <li>Elevation: {station.elevation} ft</li> <br/>
                    <li>Name: {station.name}</li> <br/>
                    <li>Runway ident: {station.runways.map(runway => (runway.ident+' '))}</li><br/>
                    <li>Runway length: {station.runways.map(runway => (runway.length_ft+'ft '))}</li><br/>
                    <li><a href={station.wikipedia} target='_blank'>Wikipedia</a></li>
                    
                </ul>
                </div> : <p>Nothing to display</p>}
                
        </div>
    )
};

export default Station