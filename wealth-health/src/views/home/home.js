import Dropdown from 'react-dropdown';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-dropdown/style.css';
import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom'
import UserContext from '../../utils/UserContext'
import States from '../../data/data.jsx'
import Modal from 'modal-component-for-p14'



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

  
  const [filled, setFilled] = useState(true);

  const [isOpen, setIsOpen] = useState(false)

    const handleSubmit = () =>{

        const data = {
            firstName,
            lastName,
            startDate,
            dateOfBirth : birthDate,
            street,
            city,
            state,
            zipCode,
            department : departmentValue
        }



        if(firstName && lastName && birthDate && startDate && street && city && state && zipCode && departmentValue) {        
            setIsOpen(true);
            registerUser(data)
            setFilled(true)
        } else {
            setFilled(false)
        }     
    }
    

  const {users, registerUser} = useContext(UserContext)




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
                    <DatePicker selected={birthDate} onChange={(date) => setBirthDate(date)} placeholderText='Date of Birth'/>
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

                
              <Modal isOpen={isOpen} close={setIsOpen}></Modal>
            </div>
            <button type='sumbit' onClick={(e) => {handleSubmit(e)}} className='save'>Save</button>
        </main>
        </div>
        
    </userProvider>
  );
}

export default App;
