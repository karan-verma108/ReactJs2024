import React, { createContext } from "react";
import CompB from "./CompB";

const FirstName = createContext();
const LastName = createContext();

const CompA = () => {
    return (
        <>
            <FirstName.Provider value={'Karan'}>
                <LastName.Provider value={'Verma'}>
                    <CompB />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    )
}

export default CompA;
export {FirstName, LastName};