import React from 'react';
import ReactDOM from 'react-dom';

import "antd/lib/button/style/index.css";
import "antd/lib/input/style/index.css";
import { Button, Progress } from 'antd';
import ClientNavBar from './Clients/ClientNavBar';
import { useNavigate } from 'react-router-dom';


const LinkAccounts = (prop) => {

    const  history = useNavigate();


  // const {history} = 
  const redirect = ()=>{
      history('/sign-up/account-security')
  }
    return (

       <div className=''>
        <ClientNavBar/>
        <div className='general-padding '>
            <div className='border2b' style={{padding:' 30px 0px'}}>
                        <div className='flex-align flex-between'>
                            <div className='flex'>
                                <h1 classNpame='large-font bold m-b-40 m-r-20'>Link your social accounts</h1>
                                {/* <AiOutlinePlusCircle style={{fontSize:'30px', marginTop:'10px', marginLeft:'30px'}}/> */}
                            </div>
                            <div style={{width:'40%', marginTop:'px'}}>
                                <p className='medium-size no-margin m-b-10px bold'>Completion rate</p>
                                <Progress className='' percent={50} status="active" style={{marginTop:'5px'}} />
                            </div>
            
                        </div>
                    <p className='align-left no-margin'>If you have relevant work experience, add it here.</p>
                    </div>
            <div class="flex-between m-t-20">
                <h2 className=''>Google</h2>
                <Button className=' buttons' style={{borderRadius:'10px', marginTop:'10px', height:'42px', backgroundColor:'transparent',}}>Connect</Button>
            </div>
            <div class="flex-between m-t-40">
                <h2 className=''>Facebook</h2>
                <Button className=' buttons' style={{borderRadius:'10px', marginTop:'10px', height:'42px', backgroundColor:'transparent',}}>Connect</Button>
            </div>
            <div class="flex-between m-t-40">
                <h2 className=''>Twitter</h2>
                <Button className=' buttons' style={{borderRadius:'10px', marginTop:'10px', height:'42px', backgroundColor:'transparent',}}>Connect</Button>
            </div>
            
            <div className='flex w-100 flex-center m-t-50 m-b-60 flex-end ' >
                <div className='w-30 w-100  m-t-60 flex flex-between' style={{marginLeft:'auto'}}>
                <Button className='m-t-10 buttons' style={{borderRadius:'10px', marginTop:'10px', height:'42px',width:'100px', backgroundColor:'transparent',}}>Back</Button>
                <Button onClick={redirect} className='m-t-10 buttons' style={{borderRadius:'10px', marginTop:'10px', height:'42px',width:'100px', backgroundColor:'transparent',}}>Continue</Button>
                </div>
            </div>
        </div>
       </div>
    )
}
export default LinkAccounts;
