import React, { useEffect, useState } from 'react'

import Post from './Post'

export default function User() {
    const [user, setUser]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
          result.json().then((resp)=>{
            setUser(resp)
          })
        })
    },[])

  return (
    <div><Post items={user}/></div>
  )
}
