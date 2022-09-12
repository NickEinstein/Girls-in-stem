import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import "antd/lib/button/style/index.css";
import "antd/lib/input/style/index.css";
import { Button, Input } from 'antd';


const VerifyPhoneNum = () => {
    const [verifyCode, setVerifyCode] = useState(false)
    return (

       <div className='general-padding w-100'>
        <div className='w-100' style={{display:'flex', justifyContent:'center'}}>
            <div className='align-center' >
                <div class="w-100  align-center ">
                    <h1 className=''>Verify your phone number</h1>
                    <p>This will only take a few minutes</p>
                </div>
                <div class=" m-t-40 w-80" style={{margin:"auto"}}>
                    <Input placeholder='Country' className='buttons' style={{width:'100%', justifySelf:'center', margin:"auto"}}/>
                    <Input placeholder='Enter phone number' className='m-t-30 buttons' style={{width:'100%'}}/>
                </div>
            </div>
            
        </div>
      
        {/* <div className='flex w-100 flex-center m-t-50 m-b-60 flex-end ' > */}
            <div className=' w-100 flex-center m-t-60 ' style={{marginLeft:'auto'}}>
            <div class="w-50 flex-between ">
                <Button className='m-t-10 buttons color-w' style={{borderRadius:'10px', marginTop:'10px', height:'42px',minWidth:'100px', backgroundColor:'#5B0877',}}>Verify by call</Button>
                <Button className='m-t-10 buttons color-w' style={{borderRadius:'10px', marginTop:'10px', height:'42px',minWidth:'100px', backgroundColor:'#5B0877',}}>Verify by SMS</Button>
            </div>
            </div>

            <div className='m-t-40 w-100 align-center'>
                <p>Your phone number will remain private and will not be shared or</p>
                <p>used for marketing purposes.<b>Privacy Policy</b></p>
            </div>
        {/* </div> */}

        {verifyCode && <div className='w-100' style={{display:'flex', justifyContent:'center'}}>
            <div className='align-center' >
                <div class="w-100  align-center ">
                    <h3 className=''>Enter code received</h3>
                </div>
                <div class="  m-t-40 w-80" style={{margin:"auto"}}>
                    <Input style={{width:'100%', justifySelf:'center', margin:"auto"}}/>
                </div>
            <Button className='m-t-10 buttons' style={{borderRadius:'10px', marginTop:'10px', height:'42px',width:'100px', backgroundColor:'transparent',}}>Back</Button>

            </div>
            
        </div>}
       </div>
    )
}
export default VerifyPhoneNum;
