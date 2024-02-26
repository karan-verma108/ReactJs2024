import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const User = () => {
    const { fname, lname } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    console.log(` navigate ${navigate}`);
    console.log(location);

    return (
        <>
            <h1>Welcome {fname} {lname} to the app! </h1>
            <p>My current path is : {location.pathname}</p>
            {location.pathname === `/users/karan/verma` ? <button onClick={() => alert('you reached at the right path')}>click me</button> : null}
            {location.pathname === `/users/karan/verma` ? <button onClick={() => navigate('/')}>Homepage</button> : null}
        </>
    )
}

export default User;