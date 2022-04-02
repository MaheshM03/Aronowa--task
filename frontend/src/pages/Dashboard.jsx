import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export default function Dashboard() {
    const { loginUser } = useSelector(state => state.login)
    return (
        <div className='container'>
            <Link  className='btn btn-success btn-md ' to="/" >Back</Link>
            <div className="row">
              
                            <h2 className='text-center'>Welcome {loginUser?.name}</h2>
            </div>
        </div>
    )
}
