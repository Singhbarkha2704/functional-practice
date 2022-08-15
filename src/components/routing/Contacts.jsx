import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Table from './Table'


const Contacts = () => {
    const [results,setResults] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/users`).then(res =>{
        console.log(res.data)
        setResults(res.data)
        } ).catch(err => console.log(err))        
        },
     []);

     const handleDelete=(e,itemId)=>{
        e.preventDefault()
        axios.delete(`http://localhost:3000/users/${itemId}`).then(res=>{console.log("deleted ",res.data)}).catch(err=>console.log(err))

        axios.get(`http://localhost:3000/users`).then(res =>{
        console.log(res.data)
        setResults(res.data)
        } ).catch(err => console.log(err))        

    }

  return (
    <div>
      <Table key={results.id}  results={results} handleDelete={handleDelete}/>
    </div>
  )
}

export default Contacts