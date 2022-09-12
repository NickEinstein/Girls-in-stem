import React from 'react';
import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
import trustedBy2 from '../images/Rectangle 7.png'
import trustedBy3 from '../images/Rectangle 78.png'
import LoginHeader from './LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import { Button, Input } from 'antd';


const SigninAsFreelancer = (prop) => {
    return (
        <div className='general-padding'>
           <LoginHeader/>
           <div className='general-padding flex-between login flex-align'>
                <div className='flex-vertical w-40 p-100'>
                    <h1>Join Softwork</h1>
                    <Input placeholder='Enter your E-mail'/>
                    <Button >Continue</Button>
                    <h1>OR</h1>
                    <Button>Sign in with google</Button>
                    <Button className=''>Signin with Apple</Button>
                    <p>Already a Member? Log In</p>
                </div>
                <div className='two-circles relative' style={{position:'relative'}}>
                    {/* <div className='' style={{width:'100px', height:'100px', borderRadius:'50%'}}></div> */}
                    {/* <div className='border2' style={{width:'100px', height:'50px', borderBottomLeftRadius:'100%',borderBottomRightRadius:'100%', position:'absolute', bottom:'0px', borderTopColor:'blue'}}></div> */}
                </div>

           </div>
        </div>
    )
}
export default SigninAsFreelancer;
