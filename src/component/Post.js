import React, { useEffect, useState } from 'react'
import Login from './Login'

export default function Post(props) {
    const[posts ,setPost]=useState([])
    

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>{
          result.json().then((response)=>{
            setPost(response)
          })
        })
      },[])
 
     
      const onchangehandler = props.items.filter((item)=>{
        if(item.id=== posts.userid){
            return posts
        }else{
            return "enter valid email"
        }
    }
        
      )

  return (
    <div><Login onClickhandler ={onchangehandler} /></div>
  )
}
