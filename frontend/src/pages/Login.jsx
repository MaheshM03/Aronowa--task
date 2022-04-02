import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { loginAction } from '../actions/auth-action'
import {Link, useHistory} from 'react-router-dom'
export default function Login() {
  const [loginDetails, setloginDetails] = useState({
    email: '',
    password: '',
  })
  const history = useHistory()
  const dispatch = useDispatch()
  const handleLogin = (e) =>{
    e.preventDefault()
    dispatch(loginAction(loginDetails))
    history.push("/Dashboard")
  }
  return (
    <div className='container'>
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <div className="card mt-4">
            <div className="card-body">
              <form onSubmit={handleLogin}>
              <input type="text" onChange={e => setloginDetails({...loginDetails,email:e.target.value})} placeholder="enter email" className="form-control" />
              <br />
              <input onChange={e => setloginDetails({...loginDetails,password:e.target.value})} placeholder="enter password" type="password" className="form-control" />
              <br />
              <button className="btn btn-success w-100">Submit</button>
              <br />
              <br />
              <p>I Don't Have Account ? <Link  to="/Signup">Signup</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
