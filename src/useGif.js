import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;     

const useGif = (tag) => {
    const [gif, setGif] = useState(''); // This is going to be a URL, so a string.
    
    const fetchGif = async (tag) => {
        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url); // This is a promise
        const imageSrc = data.data.images.downsized_large.url;
        setGif(imageSrc);
    }

    // ComponentDidMount ... first render
    useEffect(() => {
        fetchGif(tag);
    }, [tag]);

    return { gif, fetchGif };
}

export default useGif;
