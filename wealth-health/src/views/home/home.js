import Dropdown from 'react-dropdown';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-dropdown/style.css';
import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom'
import UserContext from '../../utils/UserContext'
import Modal from '../../components/modal.jsx'
import States from '../../data/data.jsx'


function App() {

  let options = []
  States.forEach(elm =>{
    options.push(elm.name)
  })

  const department = [
    'Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'
  ]

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
  const [filled, setFilled] = useState(true);

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


        //Lancer la focntuon registerUser

        if(firstName && lastName && birthDate && startDate && street && city && state && zipCode && departmentValue) {        
            setIsShown(current => !current);
            registerUser(data)
            setFilled(true)
        } else {
            setFilled(false)
        }     
    }
    

  const {users, registerUser} = useContext(UserContext)
    console.log(users);

    // const hzzz = event => {
    //   console.log('handleSubmit ran');
  
    //   // 👇️ clear all input values in the form
    //   setFirstName('');
    //   setLastName('');
    //   setBirthDate('');
    //   setStartDate('');
    //   setStreet('');
    //   setCity('');
    //   setZipCode('');
    // };




  return (
    <userProvider>
        <div className="App">
        <header>
            <h1>HRNET</h1>
            <Link to='/employee' className='header-link'>View Current Employees</Link>
        </header>
        <main>
            <h2>Create employee</h2>
            <div className='parent'>
                <form action="#"  className='child1' >
                    <input type="text" id="first-name"  placeholder='First Name' className='first-margin' onChange={(e) => setFirstName(e.target.value)}/>
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
                    <Dropdown options={department} value='Department' className='dropdown' onChange={(e) => setDepartmentValue(e.value)}/>
                    {filled ? '' : <div>Veuillez remplir tout les champs</div> }
                </form>

                
                {isShown ? <Modal close={setIsShown}></Modal> : ''}
            </div>
            <button type='sumbit' onClick={(e) => {handleSubmit(e)}} className='save'>Save</button>
        </main>
        </div>
        
    </userProvider>
  );
}

export default App;
