import React from 'react'
import './CounterApp.css'
import { useState } from 'react';


// custom Hook
const useCount=()=>{
    const [count,setCount] = useState(0); //initial value of count-->0
    return{
        value:count,                              //count value  
        increment:()=>{setCount(prev=>prev+1)},  //when '+' is clickied
        decrement:()=>{setCount(prev=>prev-1)},  //when '-' is clicked
        reset:()=>{setCount(0)}                  //when 'Reset' is clicked   
    }
}

// Component
const CounterApp = () => {
    const counter= useCount(0)  //calling 'useCount' hook, which returns object and stored in the variable
  return (
    <div className='counter'>
        <h1 className='heading'>Counter App</h1>

        <div className='container'>
            <h2 className='value'>{counter.value}</h2>
        <div className='btn-group'>
            <button className='btn btn-success me-4' onClick={counter.increment}>+</button>
            <button className='btn btn-danger ms-4 me-4'  onClick={counter.decrement}>-</button>
            <button className='btn btn-warning me-4'  onClick={counter.reset}>Reset</button>
        </div>

        </div>
        
    </div>
  )
}

export default CounterApp