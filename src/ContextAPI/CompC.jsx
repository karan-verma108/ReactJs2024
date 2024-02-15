import React from "react";
import { FirstName, LastName } from './App';

const CompC = () => {
    return (
        <>
            <FirstName.Consumer>
                {(fName) => {
                    return (
                        <LastName.Consumer>
                            {(lName) => {
                                return <h1>Hi my is {fName} {lName}</h1>
                            }}
                        </LastName.Consumer>
                    )
                }}
            </FirstName.Consumer>
        </>
    )
}

export default CompC;