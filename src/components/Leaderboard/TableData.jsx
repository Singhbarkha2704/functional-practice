import React from 'react'

const TableData = (props) => {
    console.log(props.data)
    const value = props.value

     const getClassName=(val)=>{
        if(val===1)
            return 'rank'
        
        else if(val===2)
            return 'name'

        else  if(val===3)  
            return 'age'
            
        else return 'points'    
    }

  return (
   
    <div>
        <table className='table table-hover  me-5'>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Names</th>
                    <th>Age</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                {props.tabledata.map(item=>
                <tr className={getClassName(value)}>
                    <td >{item.rank}</td>
                    <td >{item.name}</td>
                    <td >{item.age}</td>
                    <td >{item.points}</td>
                </tr>
                )
                }
                
            </tbody>
        </table>

    </div>
  )
}

export default TableData