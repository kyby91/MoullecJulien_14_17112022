import React from "react";
import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext({});

export const UserProvider = ({children}) =>{

    const [users, setUsers] = useState([])
    
    const registerUser = (data) =>{
        setUsers(
            [...users],
            // {
            //     ...data
            // }
            data
        )
    }



    return(
        <UserContext.Provider value={{users, registerUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;