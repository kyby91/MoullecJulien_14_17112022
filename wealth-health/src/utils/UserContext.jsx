import React from "react";
import { useState } from "react";
import { createContext } from "react";

import Moment from 'moment';

const fakeData = [
    {
      firstName : 'toto',
      lastName : 'tata',
      startDate : '01/05/2022',
      department : 'RH',
      dateOfBirth : '01/08/1995',
      street : 'milk road',
      city : 'NY',
      state : 'IDF',
      zipCode : '87520'
    },
    {
      firstName : 'sam',
      lastName : 'ben',
      startDate : '01/12/2022',
      department : 'Sales',
      dateOfBirth : '21/08/1985',
      street : 'kon',
      city : 'Paris',
      state : 'Bourg',
      zipCode : '18920'
    }
]

const UserContext = createContext({});

export const UserProvider = ({children}) =>{

    const [users, setUsers] = useState(fakeData)
    // let array = []
    const registerUser = (data) =>{
        // if (users.length>0) {
            setUsers([  
                ...users,
                {
                    ...data,
                    startDate : Moment(data.birthDate).format('DD-MM-YYYY'),
                    dateOfBirth : Moment(data.startDate).format('DD-MM-YYYY'),
                }
            ])
        //     console.log('A');
        // } else {
        //     setUsers(data)
        //     console.log('B');
        // }
        

        console.log(users);
        // array.push(data)
        // setUsers(array)
        // console.log(users);
    }



    return(
        <UserContext.Provider value={{users, registerUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;