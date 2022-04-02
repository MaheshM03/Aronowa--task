import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { userAction } from '../actions/user-action'
import {useHistory} from 'react-router-dom'
export default function Signup() {
    const dispatch = useDispatch()
    const history = useHistory()
   const [formData, setformData] = useState(
       {
           name:"",
           email:"",
           password:"",
       }
   )
    const handleSignup =  (e) =>{
        e.preventDefault()
        console.log(formData)
        dispatch(userAction(formData))
        e.target.reset()
        history.push("/")

    }
  return (
    <div className='container'>
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSignup}>
                            <input onChange={e=> setformData({...formData,name:e.target.value})} type="text" className="form-control" placeholder='enter name' />
                            <br />
                            <input onChange={e=> setformData({...formData,email:e.target.value})} type="email" className="form-control" placeholder='enter email' />
                            <br />
                            <input onChange={e=> setformData({...formData,password:e.target.value})} type="password" className="form-control" placeholder='enter password' />
                            <br />
                            <button className="btn btn-success w-100">Signup</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
