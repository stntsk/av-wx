import React, { useState } from "react";
import './Searchbar.css'


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
        <div >
            <form onSubmit={search} class='search'>
                <div class='form'>
                    <input 
                    value={term} 
                    onChange={handleChange}
                    type='text'
                    placeholder="Enter station ICAO code"
                    id='box'
                    />
                </div>
                <div class='form'>
                    <input type='submit' value='SEARCH' id='button'/>
                </div>    
            </form>
        </div>    
    )
}

export default Searchbar;