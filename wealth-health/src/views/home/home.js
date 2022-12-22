import Dropdown from 'react-dropdown';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-dropdown/style.css';
import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom'
import UserContext from '../../utils/UserContext'
import Modal from '../../components/modal.jsx'
import Moment from 'moment';


function App() {

  const states = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
  ];

    //   console.log(users)

  let options = []
  states.forEach(elm =>{
    options.push(elm.name)
  })

  const department = [
    'Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'
  ]
  const defaultDepartment = department[0]

  const [birthDate, setBirthDate] = useState(null);
  const [startDate, setStartDate] = useState(null);

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [street, setStreet] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [zipCode, setZipCode] = useState(null);
  const [departmentValue, setDepartmentValue] = useState(null);

  
  const [isShown, setIsShown] = useState(false);

    //   console.log(birthDate, startDate, firstName, lastName, street, city, state, zipCode, departmentValue);
    //   console.log(firstName);
    const handleSubmit = () =>{

        const data = {
            firstName,
            lastName,
            // startDate : Moment(birthDate).format('DD-MM-YYYY'),
            // dateOfBirth : Moment(startDate).format('DD-MM-YYYY'),
            startDate,
            dateOfBirth : birthDate,
            street,
            city,
            state,
            zipCode,
            department : departmentValue
        }

        console.log(data)

        //Lancer la focntuon registerUser

        if(firstName && lastName && birthDate && startDate && street && city && state && zipCode && departmentValue) {
            console.log('ok');            
            setIsShown(current => !current);
            registerUser(data)
        } else {
            console.log('nooooo');
            console.log(firstName , lastName , birthDate , startDate , street , city , state , zipCode , departmentValue);
        }     
    }
    

  const {users, registerUser} = useContext(UserContext)
    console.log(users);
  return (
    <userProvider>
        <div className="App">
        <header>
            <h1>HRNET</h1>
            <Link to='/employee' className='header-link'>View Current Employees</Link>
        </header>
        <main>
            <h2>Create employee</h2>
            <div>
                <form action="#" id="create-employee">
                    <input type="text" id="first-name" placeholder='First Name' className='first-margin' onChange={(e) => setFirstName(e.target.value)}/>
                    <input type="text" id="last-name" placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                    {/* <input id="date-of-birth" type="text" placeholder='Date of Birth'/> */}
                    <DatePicker selected={birthDate} onChange={(date) => setBirthDate(date)} placeholderText='Date of Birth'/>
                    {/* <input id="start-date" type="text" placeholder='Start Date'/> */}
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} placeholderText='Start Date'/>

                    <fieldset className="address">
                        <legend>Address</legend>
                        <input id="street" type="text" placeholder='Street' onChange={(e) => setStreet(e.target.value)}/>
                        <input id="city" type="text" placeholder='City' onChange={(e) => setCity(e.target.value)}/>
                        <Dropdown options={options}  value='State'  className='dropdown' onChange={(e) => setState(e.value)}/>
                        <input id="zip-code" type="number" placeholder='Zip Code' onChange={(e) => setZipCode(e.target.value)}/>
                    </fieldset>
                    <Dropdown options={department} value={defaultDepartment} className='dropdown' onChange={(e) => setDepartmentValue(e.value)}/>
                </form>

                <button onClick={(e) => {handleSubmit(e)}} className='save'>Save</button>
                {isShown ? <Modal close={setIsShown}></Modal> : ''}
            </div>
        </main>
        </div>
        
    </userProvider>
  );
}

export default App;
