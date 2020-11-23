import React, { useState } from 'react';

import useGif from '../useGif';

const Tag = () => {
    const [tag, setTag] = useState('cats'); // 'Cats' as the initial tag
    const {gif, fetchGif} = useGif(tag);

    const handleClick = () => fetchGif(tag);

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
