import React from 'react';
import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
// import trustedBy2 from '../images/Rectangle 7.png'
// import trustedBy3 from '../images/Rectangle 106.png'
import trustedBy3 from '../../images/Rectangle 106.png'
import LoginHeader from '../LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import { Button, Input } from 'antd';


const signupAsClient = (prop) => {
    const clientEmail = ()=>{
        // const { history } = prop;
        // history.push('/sign-up');

    }
    return (
        <div className=' '>
           <LoginHeader/>
           <div className='flex-between login'>
                <div className=' p-100' style={{paddingLeft:'',paddingRight:'', minWidth:'25%', maxWidth:'50%', }}>
                    <div className='flex-vertical' style={{maxWidth:'80%'}}>
                        <h1 className='m-b-60'>Find Your Perfect Job</h1>
                        <h1 className='m-b-60'>This will only take a few mins</h1>
                        <h3 className='m-b-60'>Enter Information</h3>
                        <Input placeholder='Enter your Email' className='m-b-20'/>
                        <Input placeholder='Enter your Uaername' className='m-b-20'/>
                        <Input placeholder='Enter your Password' className='m-b-20'/>
                        <Input placeholder='Enter your confirmed Password' className='m-b-20'/>
                        <div className='login-bck w-100'>
                            <Button onClick = {clientEmail} className='w-100' >Continue</Button>
                        </div>
                        
                        <h3>OR</h3>

                        <Button className='m-b-20'>Sign in with Google</Button>
                        <Button className='m-b-60'>Sign in with Apple</Button>
                        <a href="">
                            <h2 className='nine-size m-t-40'>Already a Member? Log In</h2>
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
export default signupAsClient;
