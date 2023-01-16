
import './App.css';
import React,{ useEffect, useState } from 'react';
import axios from "axios";
import {Input } from '@mui/material';
import Calculate from './Calculate';

function App() {
  const baseUrl="https://jsonplaceholder.typicode.com/posts/1";
  const[userName,setUserName]=useState();
  const[password,setPassword]=useState();
  const[data,setData]=useState();
  const[post,setPost]=useState();
  useEffect(()=>{
    axios.get(baseUrl).then((response)=>{
      setData(response.data);
    })
  })
  function createPost(){
    axios.post(baseUrl,{
      title:"subham",body:"work hard bouy",
    }).then((response)=>setPost(response.data));
  }
  return(
    
      <div className='loginPage'>
        <Calculate/>
        <div className='AppLogin'> ̰
          <div className='userName'> 
            <div>USERNAME:</div>
              <Input placeholder='enter your username'
              type='text'
              value={userName}
              onChange={(e)=>setUserName(e.target.userName)} />
           </div>
            <div className='password'> 
              <p>PASSWORD:</p>
              <Input placeholder='enter password'
              type='password'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button block size="lg" type="submit">submit</button>
            {/* <div>
              <div>
              <h1>{post.title}</h1>
              <p>{post.body}</p></div>
            <button onClick={createPost}>Creeate Post</button>
            </div>
            <div>
            <h4>{data.title}</h4>
            <h1>{data.body}</h1></div> */}
        </div>
      </div>
    );
}

export default App;
