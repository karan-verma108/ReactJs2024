import React from "react";

const Name = (props) => {
    return (
        <>
            <h1>This is name page</h1>
            <p>My favorite wrestling promotion is {props.title} </p>
        </>
    )
}

export default Name;