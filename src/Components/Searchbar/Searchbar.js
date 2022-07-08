import React, { useState } from "react";


const Searchbar = (props) => {
    
    const  [term, setTerm]  = useState('')


    
    
    const handleChange = (event) => {
        setTerm(event.target.value);
    }

    const search = () => {
        props.onSearchMetar(term);
        props.onSearchTaf(term);
    }

    return (
        <div>
            <input 
                value={term} 
                onChange={handleChange}
                type='text'
                placeholder="Enter station ICAO code"
                />
            <button className="SearchButton" onClick={search}>SEARCH</button>
        </div>    
    )
}

export default Searchbar;