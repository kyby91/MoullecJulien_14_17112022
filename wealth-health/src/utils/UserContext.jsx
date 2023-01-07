import React from "react";
import { useState } from "react";
import { createContext } from "react";
import fakeData from '../data/fakeData'

import Moment from 'moment';

const UserContext = createContext({});

export const UserProvider = ({children}) =>{

    const [users, setUsers] = useState(fakeData)
    const registerUser = (data) =>{
            setUsers([  
                ...users,
                {
                    ...data,
                    startDate : Moment(data.birthDate).format('DD-MM-YYYY'),
                    dateOfBirth : Moment(data.startDate).format('DD-MM-YYYY'),
                }
            ])        
    }



    return(
        <UserContext.Provider value={{users, registerUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;