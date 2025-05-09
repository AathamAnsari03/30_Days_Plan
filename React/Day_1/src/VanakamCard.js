import './VanakamCard.css';
import React, { useState } from 'react';

function VanakamCard(){
    const [msg, setMsg] = useState('')
    function handleClick() {
        fetch('http://localhost:5000/api/greet')
            .then(response => response.json())
            .then(data => {
                setMsg(data.message);
            })  

    }

    return(
        <div className="vanakam-card">
            <h1>Vanakam Flask Nanba!</h1>
            <p>I am React app, Created by Ans!</p>
             <button className='button' onClick={handleClick}>Send to Flask!</button>
             <p>{msg}</p>
        </div>
    );
}
export default VanakamCard;