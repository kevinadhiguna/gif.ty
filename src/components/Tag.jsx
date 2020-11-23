import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const Tag = () => {
    const [tag, setTag] = useState('cats'); // 'Cats' as the initial tag
    const [gif, setGif] = useState(''); // This is going to be a URL, so a string.
    
    const fetchGif = async (tag) => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;     
        const { data } = await axios.get(url); // This is a promise
        const imageSrc = data.data.images.downsized_large.url;
        setGif(imageSrc);
    }

    // ComponentDidMount ... first render
    useEffect(() => {
        fetchGif(tag);
    }, [tag]);
    
    const handleClick = () => {
        fetchGif(tag);
    }

    return(
        <div className="container">
            <h1>Random {tag} Gif</h1>
            <img width="500" src={gif} alt="Random Gif" className="imgGif" />
            <input value={tag} onChange={e => setTag(e.target.value)} />
            <button onClick={handleClick}>Click here for more!</button>
        </div>
    );
}

export default Tag;
