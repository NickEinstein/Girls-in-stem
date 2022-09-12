import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
// import trustedBy2 from '../images/Rectangle 7.png'
import trustedBy3 from '../../images/Rectangle 106.png'
import LoginHeader from '../LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import { Button, Input, notification } from 'antd';
import { useNavigate } from 'react-router-dom';


const PasswordPage = (prop) => {

    
    const [password, setPassword] = useState('')
   


const openNotificationWithIcon = (type, description, title) => {
    notification[type]({
      message: title,
      description: description
    });
  };

  const toValidate = ()=>{
    if (!password){
        openNotificationWithIcon('error','Please input password ')
    // setErrorMsg('Please input User Name')
    return false
    }
    else 
    return true
}
    const  history  = useNavigate();
    console.log('hi')

    const signUpAsClient =()=>{{
        toValidate() &&
        history('/sign-up/client-dashboard');

    }}
    return (
        
        <div className=' '>
           <LoginHeader/>
           <div className='flex-between login'>
                <div className=' p-100' style={{paddingLeft:'',paddingRight:'', minWidth:'40%', maxWidth:'50%', }}>
                    <div className='flex-vertical' style={{maxWidth:'80%'}}>
                        <h1 className='m-b-30'>Welcome</h1>
                        <p className='p-20-0'>robertpamela17@yahoo.co.uk</p>
                        <Input placeholder='Enter Password' className='' onChange={(e)=>{setPassword(e.target.value)}}/>
                        <div className='flex-between nine-size m-t-10 m-b-20'>
                            <p >Keep me logged in</p>
                            <p>Forgot password</p>
                        </div>
                        {/* <Button  className='m-b-20'>Login</Button> */}
                        {/* <Button className='m-b-60'>Sign up as a freelancer</Button> */}
                        <div className='login-bck w-100'><Button onClick={signUpAsClient} className='w-100' >Log In</Button></div>
                        <a href="">
                            <h2 className='size-11 m-t-30'>Dont have a Softwrk account? <b> Sign Up</b></h2>
                        </a>
                    </div>
                </div>
                <div className='relative flex-align flex-center w-50' style={{minHeight:'100%', position:'relative', backgroundColor:'#F6F6F6',}}>
                <div className='two-circles relative' style={{position:'relative'}}></div>
                <img src ={trustedBy3} className='' style={{position:'absolute', top:'50%', height:'49%', width:'98.8%' }}/>
                    {/* <div className='' style={{width:'100px', height:'50px', ottomLeftRadius:'100%',ottomRightRadius:'100%', position:'absolute', bottom:'0px', opColor:'blue'}}></div> */}
                </div>

           </div>
        </div>
    )
}
export default PasswordPage;
