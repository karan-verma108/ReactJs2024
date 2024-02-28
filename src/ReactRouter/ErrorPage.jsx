import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {

    const navigate = useNavigate();

    return (
        <>
            <h1 style={{ 'textAlign': 'center' }}>OOPS PAGE NOT FOUND!!!</h1>
            <button onClick={() => navigate('/')}>Go back</button>
        </>
    )
}

export default ErrorPage;