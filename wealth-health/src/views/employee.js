import React, {useMemo, useState, useContext} from 'react'
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, useSortBy } from 'react-table'
import GlobalFilter from '../components/GlobalFilter.jsx'
import { Link } from 'react-router-dom'
import UserContext from '../utils/UserContext'



function Table({ columns, data }) {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      state,
      setGlobalFilter,
    } = useTable(
      {
        columns,
        data,
      },
      useGlobalFilter, useSortBy
    )
    const {globalFilter} = state
    // We don't want to render all 2000 rows for this example, so cap
    // it at 20 for this use case
    const firstPageRows = rows.slice(0, 20)
  
    return (
      <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}></GlobalFilter>
        <table {...getTableProps()} className='table'>
          <thead className='th'>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()} className='tr'>
                {headerGroup.headers.map(column => (
                  // Add the sorting props to control sorting. For this example
                  // we can add them into the header props
                  <th {...column.getHeaderProps(column.getSortByToggleProps())} className='th'>
                    {column.render('Header')}
                    {/* Add a sort direction indicator */}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className='tb'>
            {firstPageRows.map(
              (row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className='tr'>
                    {row.cells.map(cell => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      )
                    })}
                  </tr>
                )}
            )}
          </tbody>
        </table>
        <br />
        <div>Showing the first 20 results of {rows.length} rows</div>
      </>
    )
}

function Employee() {
    
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Start Date',
        accessor: 'startDate',
      },
      {
        Header: 'Department',
        accessor: 'department',
      },
      {
        Header: 'Date of Birth',
        accessor: 'dateOfBirth',
      },
      {
        Header: 'Street',
        accessor: 'street',
      },
      {
        Header: 'City',
        accessor: 'city',
      },
      {
        Header: 'State',
        accessor: 'state',
      },
      {
        Header: 'Zip Code',
        accessor: 'zipCode',
      }
    ],
    []
  )

  const fakeColumns = [
    {
      Header: 'First Name',
      accessor: 'firstName',
    },
    {
      Header: 'Last Name',
      accessor: 'lastName',
    },
    {
      Header: 'Start Date',
      accessor: 'startDate',
    },
    {
      Header: 'Department',
      accessor: 'department',
    },
    {
      Header: 'Date of Birth',
      accessor: 'dateOfBirth',
    },
    {
      Header: 'Street',
      accessor: 'street',
    },
    {
      Header: 'City',
      accessor: 'city',
    },
    {
      Header: 'State',
      accessor: 'state',
    },
    {
      Header: 'Zip Code',
      accessor: 'zipCode',
    }
  ]

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
  }]
    
  // const data = React.useMemo(() => makeData(2000), [])

  // const Data = [
  //     {
          
  //     }
  // ]
    
  const [filter, setFilter] = useState('')

  const {users, registerUser} = useContext(UserContext)

 return(
    <div className='employee'>
        <h1>Current Employees</h1>
        <div className='employee-table'>
            <div className='employee-table-filter'>
                <label>Show<select><option value="10">10</option></select>entries</label>
            </div>
            <Table columns={columns} data={users} />
            <div>
            </div>
        </div>
        <Link to='/' className='header-link'>Home</Link>
    </div>
 )
}


export default Employee;