import React, { useState } from 'react'
import "./Login.css"

export default function Login(props) {
    const[email ,setemail]= useState('')
    const[password ,setpassword] =useState('')

  const onsubmit=()=>{
        props.onClickhandler(email,password)               
    }
  return (
    <div>
    <h1>Login Page</h1>
  
  <div className='login'>
     <div> 
       <input type= "text"  placeholder='enter your email ' onChange={(e)=>setemail(e.target.value)} />
     </div>
     <div>
       <input type ="password"  placeholder='enter your password' onChange={(e)=>setpassword(e.target.value)}/>
     </div>
     <div>
   <button  onClick={onsubmit}>login</button>
  </div>
 
 
 
  </div>
 
     </div>
   )
  
}

