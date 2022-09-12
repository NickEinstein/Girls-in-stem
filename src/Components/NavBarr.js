import React, { useEffect, useState } from 'react';
// import 'antd/dist/antd.css';
import "antd/lib/button/style/index.css";
import "antd/lib/input/style/index.css";

import ReactDOM from 'react-dom';
// import landing from '../../images/Landing1.png'
import logo from '../images/Flag-logo.png'


// import landing5 from '../images/landing5.png'
import { Button } from 'antd';
import { useNavigate, Link } from 'react-router-dom';

const NavBarr = () => {

    const  history = useNavigate;

    // const {history} = 
    const redirect = ()=>{
        history('/join-us')
    }

    return (
        <div className='general-padding border2b w-100 nav' style={{top:'0px'}} >
                    <div className='flex-between flex-align'>
                    <img style={{height:"60px"}} src = {logo}/>
                <ul className='flex-between w-50 no-decor flex-align bold'>
                            
                            <Link to='/' className='no-decor'>Home</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/community'>Community </Link>
                            <Link to=''>Donate</Link>
                            {/* <Link to='./Join-us'>Join Us</Link> */}
                            <Button className='buttons'>Join Us</Button>
                        </ul>
                    {/* <h2>Hi</h2> */}

                    </div>
                    {/* <img style={{height:"635px"}} src = {pictures[placeKeeper]}/> */}
            
        </div>
    )
}
export default NavBarr;
