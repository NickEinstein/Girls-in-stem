import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../../images/logo-Softwork.png'
import bro from '../../images/landing4.png'
import { Button, Input } from 'antd';

const NavBar = (prop)=>{
        const { history } = prop;
        // console.log(prop)

    const signUp = ()=>{

        history.push('/sign-up');
    }
    return(
        <div className='general-padding' style={{color:prop.backgroundColor}}>
            <nav className='navbar w-100' >
                
                    <div className=' flex-between flex-align w-100 '>
                        <div className='first-part w-30 '>
                        <div className='flex-between flex-align bold'>
                            <li>
                                <img src = {logo} style={{width:"125px"}}/>
                            </li>
                            <li>
                                <Input placeholder='Search' style={{padding:'9px', borderRadius:'20px'}}/>
                            </li>
                            
                        </div>
                        </div>
                        <ul className='flex-between no-margin flex-align bold second-part two-percent-padding' style={{width:'60%', fontSize:'11px'}}>
                            
                            <li   className='no-margin'>Orders</li>
                            <li  className='no-margin'>Projects</li>
                            <li  className='no-margin'>Earnings</li>
                            <li  className='no-margin'>Invite friends</li>
                            <li  className='no-margin'>Messages</li>
                            <li  className='no-margin'>Messages</li>
                            <li  className='no-margin'>
                                <div className='flex-align '>
                                    <p className='m-t-10 m-r-10 nine-size '>Raymond Sky</p>
                                    <img className='' style={{width:'40px', height:'40px', borderRadius:'100%', padding:'0px'}} src = {bro}/>
                                </div>
                            </li>
                            
                            {/* <li>
                                <Button onClick={signUp} className='bold' style={{padding:'0px', borderRadius:'30px', width:'110px', fontFamily: 'Merriweather serif',fontWeight:'bold' }}>SignUp</Button>
                            </li> */}
                            </ul>
                        
                        
                    </div>
               

            </nav>
        </div>
    )
}
export default NavBar;
