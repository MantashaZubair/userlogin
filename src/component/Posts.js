import React, { useEffect, useState } from 'react'
import Login from './Login'
import Post from './Post';

export default function Posts(props) {
  let password='12345';
    const[posts ,setPosts]=useState([])
    const [users, setUsers]=useState([])
    const[user,setUser]=useState([])
    const[isLogin,setIsLogin]=useState(false)
    const [userPosts,setUserPosts]=useState([])
    

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>{
          result.json().then((response)=>{
            setPosts(response)
          })
          fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
          result.json().then((resp)=>{
            setUsers(resp)
          })
        })
        })
      },[])
 
     
      const onchangehandler = (email,pass)=>{
         let userInfo=users.filter((item)=> item.email.toLowerCase()===email.toLowerCase())

         console.log(userInfo[0]);
         if (userInfo.length>0 && password===pass){
           let newPost=posts.filter((item)=> item.userId==userInfo[0].id);

           setUserPosts(newPost);
           setIsLogin(true)
           setUser((user)=>user=userInfo[0]);
           console.log(newPost)
         }
      }
    
        
      

  return (
    <div>{isLogin?<Post posts={userPosts} user={user}/>:<Login onClickhandler ={onchangehandler} />}</div>
  )
}
