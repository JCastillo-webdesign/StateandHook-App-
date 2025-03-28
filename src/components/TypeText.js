import React, { useState } from 'react';

function TypeText () {
    const [textBox, setTextBox] = useState("");

    return (
            <div>           
                <h2>TASK 2</h2>
                   <form>
                        <input
                            value={textBox}
                            onChange={(e) => setTextBox(e.target.value)}
                            type="text"
                            placeholder="Type anything"
                        />
                        <p style={{ color: "blue"}}>{textBox}</p>    
                    </form>
            </div>
    );
};
export default TypeText;               