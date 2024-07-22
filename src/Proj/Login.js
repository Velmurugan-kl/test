import React from 'react'
import './Style.css'
import { useNavigate } from 'react-router-dom'
/*import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'*/

const Login = () => {
  const navi =useNavigate();
  const Fun=()=>{
    alert("You are loging in");
    navi('/Home')
  }
  const textchange = (eve) => {

    console.log(eve.target.value);
  }
  return (
    <div className='outlog'>
    <div className='log'>
        <a href='https://www.skct.edu.in/#/'>
            <img src='Images/skct_logo1_pn.png' alt='Skct' className='logimg'/>
            </a>
            <div className='txt'>
                <label>Name : </label><br/>
                <input type='text' onChange={textchange} className='ip' placeholder='Name'/>  
            </div>
            <div className='pass'>
                <label>Password : </label><br/>
                <input type='password' className='ip' placeholder='Password' required='required'/>
            </div>
            <div className='sub'>
                <button onClick={Fun} className='logbut'>Login</button>
                <a href='/signup'>New to website?</a>
            </div>
            

    </div>
    </div>
  )
}

export default Login
