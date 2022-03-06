import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {

    const [gifs, setGifs] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch(
          `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
        )
          .then((r) => r.json())
          .then(({ data }) => {
            const gifs = data.map((gif) => ({ url: gif.images.original.url }));
            setGifs(gifs);
          });
        }, [search]);

    return (
        <div className='gifListContainer'>
            {gifs && <GifList gifs={gifs} />}
            <GifSearch onSubmitSearch={setSearch} />
        </div>
    )
}

export default GifListContainer