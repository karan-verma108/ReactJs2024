import React, { useReducer } from "react";

const initialValue = 0;

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            break;
    }
    return state;
}

const App = () => {

    const [state, dispatch] = useReducer(reducer, initialValue);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
            <p style={{ fontSize: '2rem' }}>{state}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>➕</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>➖</button>
        </div>
    )
}

export default App;