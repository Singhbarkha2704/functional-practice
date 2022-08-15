import React from 'react'
import './Leaderboard.css'
import response from "./Response.js";
import Header from './Header'

const Leaderboard = () => {
    
  return (
    <div className='board'>      
      <Header/> <hr/>
      <h1>Data in no Specific Order</h1>
      <table className='table table-hover table-danger'>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Names</th>
                    <th>Age</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
              {response.list.map(item => 
                <tr>
                    <td>{item.rank}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.points}</td>
                </tr>
              )               
              }                
            </tbody>
        </table>
    </div>
  )
}

export default Leaderboard