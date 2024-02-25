import React from "react";
import { useLocation, useParams } from "react-router-dom";

const User = () => {
    const { fname, lname } = useParams();
    const location = useLocation();
    // console.log(location);

    return (
        <>
            <h1>Welcome {fname} {lname} to the app! </h1>
            <p>My current path is : {location.pathname}</p>
            {location.pathname === `/users/karan/verma` ? <button onClick={()=> alert('yes you reached the right path')}>Click me</button> : null}
        </>
    )
}

export default User;