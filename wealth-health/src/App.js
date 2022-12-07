import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './style.scss';

function App() {

  const options = [
    'one', 'two', 'three'
  ];



  return (
    <div className="App">
      <header>
        <h1>HRNET</h1>
        <div>View Current Employees</div>
      </header>
      <main>
        <h2>Create employee</h2>
        <div>
            <form action="#" id="create-employee">
              <label for="first-name"></label>
              <input type="text" id="first-name" placeholder='First Name'/>

              <label for="last-name"></label>
              <input type="text" id="last-name" placeholder='Last Name'/>

              <label for="date-of-birth"></label>
              <input id="date-of-birth" type="text" placeholder='Date of Birth'/>

              <label for="start-date"></label>
              <input id="start-date" type="text" placeholder='Start Date'/>

              <fieldset class="address">
                  <legend>Address</legend>

                  <label for="street"></label>
                  <input id="street" type="text" placeholder='Street'/>

                  <label for="city"></label>
                  <input id="city" type="text" placeholder='City'/>

                  <label for="state">State</label>
                  <select name="state" id="state"></select>

                  <label for="zip-code">Zip Code</label>
                  <input id="zip-code" type="number" />
              </fieldset>

              <label for="department">Department</label>
              <select name="department" id="department">
                  <option>Sales</option>
                  <option>Marketing</option>
                  <option>Engineering</option>
                  <option>Human Resources</option>
                  <option>Legal</option>
              </select>
            </form>

            <button onclick="saveEmployee()">Save</button>
            <Dropdown options={options}  value='State' placeholder="Select an option" />;
        </div>
      </main>
    </div>
  );
}

export default App;
