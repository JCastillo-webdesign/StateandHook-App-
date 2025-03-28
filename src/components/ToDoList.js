import React, { useState } from 'react';

function ToDoList () {
    const [list, setList] = useState([]);
    const [input, setInput] = useState("");

    function changeInput(e) {
        setInput(e.target.value);
    }
    
    function Submit() {
        if (input.trim()) {
            setList([...list, input.trim()]);
            setInput("");
        }
    }

    function Delete(index) {
        setList(list.filter((_, i) => i !==index));
    }
    
    return (
        <div>
            <h2>TASK 3</h2>
            <h3>To Do List</h3>
              <input type="text" value={input} onChange={changeInput} />
            <button onClick={Submit}>Add Task</button>

            <ul>
                {list.map((list, index) => (
                    <li key={index}>
                        {list}
                        <button onClick={() => Delete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};
export default ToDoList; 





