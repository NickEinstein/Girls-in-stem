import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
import trustedBy2 from '../images/Rectangle 7.png'
import trustedBy3 from '../images/Rectangle 106.png'
import LoginHeader from './LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import { Button, Input, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
    CreateUser,
    DashboardMdaRequestCount,
    RequestLogs,
    UpdateRequestItem,
    GetModuleLink,
    // GetTotalPayPerMDA
  } from "../utility/fetch";
import { post } from "../services/fetch";



const FindYourPerfectJob = (prop) => {

        const [username, setUsername] = useState('')
        const [name, setName] = useState('')
        const [come, setcome] = useState('')
        const [password, setPassword] = useState('')
        const [confirmPassword, setConfirmPassword] = useState('')
        const [errorMsg, setErrorMsg] = useState('')

    const history  = useNavigate();

    const openNotificationWithIcon = (type, description, title) => {
        notification[type]({
          message: title,
          description: description
        });
      };

    const toValidate = ()=>{
        if (!username ){
            openNotificationWithIcon('error','Please input User Name ')
        // setErrorMsg('Please input User Name')
        return false
        }
        else if (!name ){
            openNotificationWithIcon('error','Please input Name', 'Error')
            return false
            }
            else if (!password ){
            openNotificationWithIcon('error','Please password', 'Error')
                return false
                }
                else if (password!=confirmPassword ){
            openNotificationWithIcon('error','Passwords do not match', 'Error')
                    return false
                    }
                    else 
                    return true
    }

    const signIn = ()=>{
        setcome(true)
        let payload = 
            {
                email: 'prop.emails',
                first_name: name,
                last_name: 'string',
                username: username,
                password: password,
                countryId: 160
              }
        
        //    const current = history.path
    if (toValidate()){
        create(payload)
        // history('/sign-up/client-login')
    }
}
          

    const create = async (payload) => {
        
        console.log(payload)
        try {
        //   const payload = []
        const res = await post({
                  endpoint: "api/freelancer/create",
                  body: payload,
                  auth: false,
        });
        console.log(res)
        // history('/sign-up/client-login')
        
       
          if (res.data.status=='success') {
            // alert('enter')
         history('/sign-up/client-login')
          
         }
       } catch (ex) {
          console.log(ex.Response);
        }
      };
            
    
        
    console.log(prop)
    return (
        <div className=' '>
           <LoginHeader/>
           <div className='flex-between login'>
                <div className=' p-' style={{padding:'80px',paddingRight:'', minWidth:'25%', maxWidth:'50%', }}>
                    <div className='flex-vertical' style={{maxWidth:'100%'}}>
                        <h2 className='m-b-40'>Find your perfect job</h2>
                        <h4 className=' p-20-0'>This will only take a few minutes</h4>
                        <h4 className='m-b-50 bold'>Enter Information</h4>
                        <Input onChange = {(e)=>{setName(e.target.value)}} placeholder='Full name' className='m-b-20'/>
                        <Input onChange = {(e)=>{setUsername(e.target.value)}} placeholder='Choose a username' className=''/>
                        <p className='m-b-20' style={{fontSize:"7px", margin:'5px', textAlign:'left'}}>Make it catchy, this will be displayed to your employer</p>
                        <Input onChange = {(e)=>{setPassword(e.target.value)}} placeholder='Choose a password' className='' style={{textAlign:'left'}}/>
                        <p className='m-b-20' style={{fontSize:"7px", margin:'5px', textAlign:'left'}}>8 characters or longer. Combine upper and lowercase letters and numbers.</p>
                        <Input onChange = {(e)=>{setConfirmPassword(e.target.value)}} placeholder='Confirm Password' className='m-b-20'/>
                        {/* <Button className='m-b-20'>Sign up as a client</Button> */}
                        {/* <Button className='m-b-60'>Sign up as a freelancer</Button> */}
                        <p className='nine-size m-t-20'>By pressing “Create account”, you agree to our <a className='nine-size bold'>Terms & Conditions</a></p>

                        <div className='login-bck w-100 m-t-40'><Button onClick={signIn} className='w-100' >Create Account</Button></div>
                        <a href="">
                            <h2 className='medium-size m-t-20'>Already a Member? <b>Log In</b></h2>
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
export default FindYourPerfectJob;
