import React, { useState } from 'react'

const ToDo = () => {

    const [enteredVal, setEnteredVal] = useState('');
    const [toDoItem, setToDoItem] = useState([]);
    const [line, setLine] = useState(false);

    const addItem = () => {
        setToDoItem((oldVal) => {
            return [...oldVal, enteredVal];
        });
        setEnteredVal('');
    };

    const temporaryDelete = () => {
        setLine(!line)
    }

    return (
        <>
            <input type="text" placeholder='enter an item' value={enteredVal} onChange={(e) => { setEnteredVal(e.target.value) }} />
            <button onClick={addItem}>add item</button>
            <ul style={{ listStyle: 'none' }}>
                {toDoItem.map((currEle, index) => {
                    return <li  key={index} id={index} style={{ textDecoration: line ? 'line-through' : 'none' }} onClick={temporaryDelete}>{currEle}</li> 
                })}
            </ul>
        </>
    )
}

export default ToDo