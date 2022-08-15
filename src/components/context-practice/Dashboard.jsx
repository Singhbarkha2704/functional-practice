import React, { useContext} from 'react'
import { Helmet } from 'react-helmet'
import ContextCreator from './ContextCreator'

const Dashboard = () => {
    const {userName} = useContext(ContextCreator)
  return (
    <div>
        <Helmet>
            <title>Dashboard</title>
        </Helmet>
        <h1>Dashboard</h1>
        <h1>hey, {userName} Welcome to Dashboard</h1>
    </div>
  )
}

export default Dashboard