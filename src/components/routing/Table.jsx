import React from 'react'

const Table = (props) => {
  return (
    
    <div>
          <h1>Contacts</h1>
        <table className='table table-hover table-info'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>E mail</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
              {props.results.map((item,key) => 
                <tr>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>
                        <button className='btn btn-danger me-2' onClick={(e)=>props.handleDelete(e,item.id)}>Delete</button>
                        <button className='btn btn-warning'>Edit</button>
                    </td>    
                </tr>
              )               
              }                
            </tbody>
        </table>
    </div>
  )
}

export default Table