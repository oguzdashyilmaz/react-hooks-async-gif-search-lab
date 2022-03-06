import React from 'react'
import { useEffect } from 'react/cjs/react.development';

function GifListContainer() {

    const [gifs, setGifs] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        
        const fetchGifs = async () => {
            const res = await fetch("https://api.giphy.com/v1/gifs/search?q=" + search + "api_key=dc6zaTOxFJmzC&rating=g");
        };

        const json = await res.json();

        const data = json.data;

        const gifsData = data.map(gif=>{
            const {id, title, images} = gif;
            return {id: id, title: title, image: images.original.url}
        })
        setGifs(gifsData);
    fetchGifs()}, [setSearch]);

    return (
        <div className='gifListContainer'>
            {gifs && <GifList gifs={gifs} />}
            <GifSearch onSearch={handeSearch} />
        </div>
    )
}

export default GifListContainer