import React from 'react'
import { updatePassword } from 'firebase/auth';
import { useContext , useState} from 'react';
import { useRef } from 'react';
import {auth} from './FirebaseConfig'
import AuthContext from '../Store/auth-context'
const UserProfile = () => {
  const newpasswordInputRef=useRef();
 const authCtx=useContext(AuthContext);
const [message,setMessage]=useState(false);
  const newPasswordHandler=(event)=>{
    event.preventDefault();
    const newPassword=newpasswordInputRef.current.value;
    console.log(newPassword);

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD-GLvAGCr9Omb6wr8k0fvBmT4JyRHRqHk',{
      method:'POST',
      body:JSON.stringify({
        idToken:authCtx.token,
        password:newPassword,
        returnSecureToken:false,
      }),
      headers:{
        'Content-Type': 'application/json',

      }
    }).then((response)=>{
      if(response.ok){
        setMessage(true);
        setTimeout(() => {
          setMessage(false);
        }, 2000);
      }
      // console.log(response);
    })
    setMessage(false);
  }
  return (
    <div style={{fontWeight:'bold',fontStyle:'italic',marginTop:'20px'}}>
      Welcome!
      <form action="" className='mt-10px' onSubmit={newPasswordHandler}>
      <div className="form-group row ">
    <label for="inputPassword" className="col-sm-2 col-form-label">Change Password</label>
    <div className="col-sm-10">
      <input ref={newpasswordInputRef} type="password" className="form-control" id="inputPassword" placeholder="Set New Password" style={{width:'200px'}}/>
    </div>
    {

      message &&<div style={{fontWeight:'bold',fontStyle:'italic',color:'red',marginLeft:'60px'}}>PASSWORD CHANGED SUCCESSFULLY</div>
    }
    <div className="col-sm-8">

    <button  className='btn btn-danger' style={{marginLeft:'500px'}} >Change Password</button>
    </div>
  </div>
      </form>
    </div>
  )
}

export default UserProfile
