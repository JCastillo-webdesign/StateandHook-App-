import React, { useState } from 'react';

function Counter () {
    const [clicks, setClicks]= useState(0);
    const [error, setError] = useState("");
    
    const handleClickIncrement = () => {setClicks(clicks + 1);
        setError("");
    };
    const handleClickDecrement = () => {
            if (clicks > 0) {
                setClicks(clicks -1);
                setError("");
            } else {
                setError("The number of clicks can't go below 0. Try again.");
            }    
        };

        return (
            <div>
                <h2>TASK 1</h2>
                <button onClick={handleClickIncrement}>Add</button>
                <button onClick={handleClickDecrement}>Remove</button>
                <p>Count # {clicks}</p>
                {error && <p>{error}</p>}
            </div>
        )
        
};   
export default Counter;