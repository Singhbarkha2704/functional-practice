import React from 'react'
import Header from './Header'
import response from './Response';
import { useState, useEffect} from 'react';
import TableData from './TableData'

const SortData = (props) => {
  const [data, setData] = useState([]);

  useEffect(() =>{
    if(props.value===1){
      const sortedData = [...response.list].sort((a,b) => Number(a.rank)-Number(b.rank))
      setData(sortedData)
    }
    else if(props.value===3){
      const sortedData = [...response.list].sort((a,b) => Number(a.age)-Number(b.age))
      setData(sortedData)
    }
    else if(props.value===4){
      const sortedData = [...response.list].sort((a,b) => Number(a.points)-Number(b.points))
      setData(sortedData)
    }
    else{
      const sorteddata=[...response.list].sort((a,b)=>a.name.localeCompare(b.name))
      setData(sorteddata)
    }
  },[props.value])

  return (
    <div>       
        <Header/><hr/>
        <h2>Sorted based on {props.userkey} </h2>
        <TableData tabledata={data} value={props.value}></TableData>

    </div>
    
  )
}

export default SortData