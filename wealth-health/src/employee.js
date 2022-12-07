import './style.scss';

function employee() {
 return(
    <div className='employee'>
        <h1>Current Employees</h1>
        <div className='employee-table'>
            <div>
                <label>Show 
                    <select>
                        <option value="10">10</option>
                    </select> 
                </label>
            </div>
            <div></div>
        </div>
    </div>
 )
}


export default employee;