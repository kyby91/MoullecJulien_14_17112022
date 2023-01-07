import React, {useMemo, useState, useContext} from 'react'
import { useTable,  useGlobalFilter,  useSortBy, usePagination } from 'react-table'
import GlobalFilter from '../components/GlobalFilter.jsx'
import { Link } from 'react-router-dom'
import UserContext from '../utils/UserContext'



function Table({ columns, data }) {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      page,
      prepareRow,
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      state:{pageIndex, pageSize},
      state,
      setGlobalFilter,
    } = useTable(
      {
        columns,
        data,
        initialState: { pageIndex: 0 },
      },
      useGlobalFilter, useSortBy, usePagination
    )
    const {globalFilter} = state
  
    return (
      <>
        
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}></GlobalFilter>
        <table {...getTableProps()} className='table'>
          <thead className='th'>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()} className='tr'>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())} className='th'>
                    {column.render('Header')}
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
            {page.map(
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
        <div className="pagination">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>{' '}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>{' '}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>{' '}
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {'>>'}
          </button>{' '}
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
          <span>
            | Go to page:{' '}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(page)
              }}
              style={{ width: '100px' }}
            />
          </span>{' '}
          <select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
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

  const {users} = useContext(UserContext)

 return(
    <div className='employee'>
        <h1>Current Employees</h1>
        <div className='employee-table'>
            <Table columns={columns} data={users} />
            <div>
            </div>
        </div>
        <Link to='/' className='header-link'>Home</Link>
    </div>
 )
}


export default Employee;