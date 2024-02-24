import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
    const { fname, lname } = useParams();

    return (
        <>
            <h1>Welcome {fname} {lname} to the app! </h1>
        </>
    )
}

export default User;