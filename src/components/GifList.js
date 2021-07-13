import React from 'react';

const GifList = (props) => {
    return ( 
        <ul>
            {props.images.map(image => 
                <li>
                    <img src={image} alt="gif" height="500px"/>
                </li>
            )}
        </ul>
     );
}
 
export default GifList;