import React from 'react'
import {useState} from "react";

function GifSearch({onSubmitSearch}) {
  
    const [search, setSearch] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        onSubmitSearch(search);
    }

    function handleChange(event) {
        setSearch(event.target.value);
    }

    return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <div className='form-container'>
                <label htmlFor="search">Search for gifs: </label>
                <input type="text" id='search' className='form-elements' value={search} onChange={handleChange} />
            </div>
            <button type='submit' className='btn btn-success'>Find gifs</button>
        </form>
    </div>
  )
}

export default GifSearch