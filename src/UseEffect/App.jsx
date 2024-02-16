import React, { useEffect, useState } from "react";

const App = () => {

    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0);

    useEffect(() => {
        alert('the button is clicked! 🙂')
    }, [num]);

    return (
        <>
            <button onClick={() => { setNum(num + 1) }}>
                click me {num}
            </button>
            <br />
            <button onClick={() => { setNum2(num2 + 1) }}>
                click me also {num2}
            </button>
        </>
    )
}

export default App;