import React, { useEffect, useState } from "react";

const ChangeTitle = () => {

    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    }

    useEffect(()=>{
        document.title = `You clicked me ${count}`;  //to change the title of a web page, we use document.title
    });

    return (
        <>
            <button onClick={Increment}>click me {count}</button>
        </>
    )
}

export default ChangeTitle;