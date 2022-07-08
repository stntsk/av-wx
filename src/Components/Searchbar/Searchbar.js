import React, { useState } from "react";


const Searchbar = (props) => {
    
    const  [term, setTerm]  = useState('')


    
    
    const handleChange = (event) => {
        setTerm(event.target.value);
    }

    const search = (e) => {
        e.preventDefault();
        props.onSearchMetar(term);
        props.onSearchTaf(term);
        props.onSearchStation(term);
        setTerm('');
    }

    return (
        <div>
            <form onSubmit={search}>
                <input 
                    value={term} 
                    onChange={handleChange}
                    type='text'
                    placeholder="Enter station ICAO code"
                    />
                <input type='submit' value='SEARCH'/>
            </form>
        </div>    
    )
}

export default Searchbar;