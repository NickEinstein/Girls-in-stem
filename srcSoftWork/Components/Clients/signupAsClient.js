import React from 'react';
import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
// import trustedBy2 from '../images/Rectangle 7.png'
// import trustedBy3 from '../images/Rectangle 106.png'
import trustedBy3 from '../../images/Rectangle 106.png'
import LoginHeader from '../LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import { Button, Form, Input } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';


const signupAsClient = (prop) => {
    const  history  = useNavigate();
    const location = useLocation()
    console.log(location)
        let current = false
        console.log(location.pathname)
    // const current = location.path
    if (location.pathname =='/sign-up/client-login')
    current = true 
    else
    current = false 

    const onFinish = (values) => {
        console.log('Success:', values);
        console.log('Success:', values);
    current?history('/sign-up/input-password'): history('/sign-up/job-registration')

      };


    const clientEmail = ()=>{

        // onValidate()
    //    const current = history.path

      
    // current?history('/sign-up/input-password'): history('/sign-up/job-registration')

    }
    return (
        <div className=' '>

            
           <LoginHeader/>
           <div className='flex-between login'>
                <div className=' p-100' style={{paddingLeft:'',paddingRight:'', minWidth:'40%', maxWidth:'50%', }}>
                    <div className='flex-vertical' style={{maxWidth:'80%'}}>
                    <h1 className='m-b-50'>{current ? 'Earn on Softwork':'Join Softwork'}</h1>

                        <Form initialValues={{ remember: true }} onFinish={onFinish}>
                            <Form.Item label="" name="email"
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input placeholder='Enter your Email' className=''/>
                            </Form.Item>

                                <div className='login-bck m-t-20 w-100'>
                                    <Button htmlType='submit' className='w-100' >Continue</Button>
                                </div>
                                
                                <h3 className='p-30-0'>---------  - OR -  ---------</h3>

                                <Button htmlType='' className='m-b-20 w-100'>Sign in with Google</Button>
                                <Button htmlType=''className='m-b-60 w-100'>Sign in with Apple</Button>
                                <a href="">
                                    <h2 className='size-11 m-t-0'>Already a Member? <b>Log In</b></h2>
                                </a>
                        </Form>
                        
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
