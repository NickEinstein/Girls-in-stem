import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../images/logo-Softwork.png'
import { BrowserRouter as Router , Routes, Route, useNavigate } from 'react-router-dom';
import { Button, Input } from 'antd';

const NavBar = (prop)=>{
  const history = useNavigate();

        {/* const { history } = prop; */}
        // console.log(prop)

    const signUp = ()=>{

        history('/sign-up');
    }
    return(
        <div className='general-padding' style={{color:prop.backgroundColor}}>
            <nav className='navbar w-100' >
                
                    <div className='flex-between flex-align w-100 '>
                        <div className='first-part w-50 '>
                        <div className='flex-between flex-align bold'>
                            <li>
                                <img src = {logo} style={{width:"125px"}}/>
                            </li>
                            <li>Post a Job</li>
                            <li>Find Work</li>
                            <li>Explore</li>
                            <li>About Us</li>
                        </div>
                        </div>
                        <ul className='flex-between flex-align bold second-part two-percent-padding' style={{width:'35%'}}>
                            <li>
                                <Input placeholder='Search' style={{padding:'9px', borderRadius:'20px'}}/>
                            </li>
                            <li>Login</li>
                            <li>
                                <Button onClick={signUp} className='bold' style={{padding:'0px', borderRadius:'30px', width:'110px', fontFamily: 'Merriweather serif',fontWeight:'bold' }}>SignUp</Button>
                            </li>
                            </ul>
                        
                        
                    </div>
               

             <ul className='flex-between bold border2 m-t-20 ' style={{padding:'10px 60px', fontsize:'9px'}}>
                    <li style={{fontSize:'13px'}}>Web Design</li>
                    <li style={{fontSize:'13px'}}>Development & IT</li>
                    <li style={{fontSize:'13px'}}>Video & Animation</li>
                    <li style={{fontSize:'13px'}}>Writing & Translation</li>
                    <li style={{fontSize:'13px'}}>Design & Creative</li>
                    <li style={{fontSize:'13px'}}>Graphics & Design</li>
            </ul>
            </nav>
        </div>
    )
}
export default NavBar;
