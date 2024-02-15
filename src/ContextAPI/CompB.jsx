import React, { useContext } from "react";
import { FirstName, LastName } from "./CompA";

const CompB = () =>{

    const fname = useContext(FirstName);
    const lname = useContext(LastName);

    return <h1>Hi my name is {fname} {lname}</h1>
}

export default CompB;