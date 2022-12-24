import React from 'react'
import { Link } from 'react-router-dom'
import Progress from '../../components/progress/Progress'
import './history.scss'
function History() {
  return (
    <div>
        <h1>
             History
            </h1>
            {/* <Link to={}> */}
            <button className='btn btn-success'>View</button>
            {/* </Link> */}
            <Progress/>
        </div>
  )
}

export default History