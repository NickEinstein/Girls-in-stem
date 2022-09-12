// import React from 'react';
// import ReactDOM from 'react-dom';

// import "antd/lib/button/style/index.css";
// import "antd/lib/input/style/index.css";
// import { Button } from 'antd';


// const AccountSecurity = () => {
//     return (

//        <div className='general-padding '>
//         <div class="flex-between">
//             <h1 className='large-font'>Account Security</h1>
//             <h2 className=''>This will only take a few minutes</h2>
//         </div>

//         <div className='m-t-60 m-b-60 align-left'>
//             <p>We value your security, and we will keep iot safe.</p> 
//             <p>Please verify your email and phone number so that we can keep your account secured.</p>
//         </div>

//         <div class="flex-between m-t-40">
//             <h2 className=''>Email</h2>
//             <Button className=' buttons' style={{borderRadius:'10px', marginTop:'10px', height:'42px', backgroundColor:'transparent',}}>Change</Button>
//         </div>

//         <div class="flex-between m-t-60">
//             <h2 className=''>Phone number</h2>
//             <Button className=' buttons' style={{borderRadius:'10px', marginTop:'10px', height:'42px', backgroundColor:'transparent',}}>Add</Button>
//         </div>

        

        
      
//         <div className='flex w-100 flex-center m-t-50 m-b-60 flex-end ' >
//             <div className='w-30 w-100  m-t-60 flex flex-between' style={{marginLeft:'auto'}}>
//             <Button className='m-t-10 buttons' style={{borderRadius:'10px', marginTop:'10px', height:'42px',width:'100px', backgroundColor:'transparent',}}>Back</Button>
//             <Button className='m-t-10 buttons' style={{borderRadius:'10px', marginTop:'10px', height:'42px',width:'100px', backgroundColor:'transparent',}}>Continue</Button>
//             </div>
//         </div>
//        </div>
//     )
// }
// export default AccountSecurity;

// import React from 'react';
// import ReactDOM from 'react-dom';

// import "antd/lib/button/style/index.css";
// import "antd/lib/input/style/index.css";
// import { Button, Input } from 'antd';


// const Charges = () => {
//     return (

//        <div className='general-padding '>
//         <div className='' style={{padding:'30px 0'}}>
            
//             <div className="flex-between" >
//                 <h1 className='large-font'>Charges</h1>
//                 <h2 className=''>This will be visible to clients, you can make adjustments at any time.</h2>
//             </div>
//             <div className='m-t-20  align-left'>
//             <h2>This will be visible to clients, you can make adjustments at any time.</h2> 
//         </div>
//         </div>

//         <div className='' style={{padding:'30px 0'}}>
            
//             <div className="flex-between" >
//                 <h2 className=''>Hourly Rate</h2>
//             </div>
//             <div className='m-t-10  align-left'>
//             <Input className=' ' style={{borderRadius:'10px', marginTop:'0px', height:'42px', width:'20%', backgroundColor:'transparent'}}/>
//             <p className='m-t-5'>This will be visible to clients, you can make adjustments at any time.</p>

//         </div>
//         </div>

//         <div className='' style={{padding:'30px 0'}}>
//             <div className="flex-between" >
//                 <h2 className=''>Service Charge</h2>
//             </div>
//             <div className='m-t-10  align-left'>
//             <Input className=' ' style={{borderRadius:'10px', marginTop:'0px', height:'42px', width:'20%', backgroundColor:'transparent'}}/>
//             <p className='m-t-5'>This will be visible to clients, you can make adjustments at any time.</p>

//         </div>
//         </div>

//         <div className='' style={{padding:'30px 0'}}>
//             <div className="flex-between" >
//             <h2 className=''>Your Payment</h2>
//             </div>
//             <div className='m-t-10  align-left'>
//             <Input className=' ' style={{borderRadius:'10px', marginTop:'0px', height:'42px', width:'20%', backgroundColor:'transparent'}}/>
//             <p className='m-t-5'>This is what you will receive</p>

//         </div>
//         </div>        
      
//         <div className='flex p-30 w-100 flex-center m-t-50 m-b-60 flex-end ' >
//             <div className='w-30 w-100  m-t-30 flex flex-between' style={{marginLeft:'auto'}}>
//             <Button className=' buttons' style={{borderRadius:'10px', marginTop:'0px', height:'42px',width:'100px', backgroundColor:'transparent',}}>Back</Button>
//             <Button className=' buttons' style={{borderRadius:'10px', marginTop:'0px', height:'42px',width:'100px', backgroundColor:'transparent',}}>Continue</Button>
//             </div>
//         </div>
//        </div>
//     )
// }
// export default Charges;

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Section7Cards from '../Section7cards';
import trustedBy1 from '../../images/Rectangle.png'
import trustedBy3 from '../../images/trustedBy-3.png'
import trustedBy4 from '../../images/trustedBy-4.png'
import NumberedCards from './NumberedCards';
import UploadButton from '../UploadButton';
// import "antd/lib/button/style/index.css";
// import "antd/lib/input/style/index.css";
// import "antd/lib/select/style/index.css";
// import "antd/lib/datePicker/style/index.css";

import { AiOutlinePlusCircle } from 'react-icons/ai';
// import Icon from 'antd/lib/icon';
// import Card from 'antd/lib/card';
import { Button, Input, Select, Modal,Progress } from 'antd';
// import { Button, Input, Progress } from 'antd';
import { IoMdMail } from 'react-icons/io';
import { FcPhoneAndroid } from 'react-icons/fc';
// import 'antd/dist/antd.css'
import ProfileNav from './ProfileNav';
import ClientNavBar from './ClientNavBar';
// import TextArea from 'antd/lib/input/TextArea';

import {

    CloseOutlined,
    SearchOutlined,
  } from '@ant-design/icons';
import VerifyPhoneNum from './VerifyPhoneNum';
import { useNavigate } from 'react-router-dom';
const  {TextArea } = Input
const { Option } = Select;


const AccountSecurity = (prop) => {
    const  history = useNavigate();

    const [closeModal, setCloseModal] = useState(false)
    // const { history } = prop;
  
    // const {history} = 
    const handleCancel1 = ()=>{
      setCloseModal(false)
    }
    const openModal = ()=>{
        setCloseModal(true)
      }

  // const {history} = 
  const redirect = ()=>{
      history('/sign-up/charges')
  }
    return (

       <div className=' bold text-color-purple '>
        {/* <ProfileNav/> */}
        <ClientNavBar/>
        <div class="general-padding">
            <div class="align-left">
                <div className='border2b' style={{padding:' 30px 0px'}}>
                    <div className='flex-align flex-between'>
                        <div className='flex'>
                            <h1 classNpame='large-font bold m-b-40 m-r-20'>Account Security</h1>
                            <AiOutlinePlusCircle style={{fontSize:'30px', marginTop:'10px', marginLeft:'30px'}}/>
                        </div>
                        <div style={{width:'40%', marginTop:'px'}}>
                           
                            <Progress className='' percent={50} status="active" style={{marginTop:'5px'}} />
                        </div>
            
                    </div>
                <h2 className='align-left'>
                <p className='medium-size no-margin m-b-10px bold'>Trust and safety is a big deal in our community. </p>
                <p className='medium-size no-margin m-b-10px bold'>Please verify your email and phone number so that we can keep your account secured.</p>
                </h2>
                </div>
                {/* <Progress className='' percent={50} status="active" style={{width:'100%', marginTop:'px'}}/> */}
                <div class="m-b-  p-50-0 border2b flex-between">
                    <div class="flex">
                        <h2 className='m-r-10'>Email</h2>
                        <IoMdMail className='text-color-purple' style={{fontSize:'26px', color:'#000051'}}/>
                    </div>
                <Button  className='m-t-10 buttons' style={{borderRadius:'10px', marginTop:'10px', height:'42px', width:'120px', backgroundColor:'#5B0877', color:"white",}}>Change</Button>
                </div>
                <div class="m-b-50  p-50-0 border2b flex-between">
                    <div class="flex">
                    <h2 className='m-r-10'>Phone number</h2>
                    <FcPhoneAndroid className='text-color-purple' style={{fontSize:'26px', color:'#000051'}}/>
                    </div>
                <Button onClick={openModal} className='m-t-10 buttons' style={{borderRadius:'10px', marginTop:'10px', height:'42px', width:'120px', backgroundColor:'#5B0877', color:"white",}}>Change</Button>
                </div>

                
                

                

                
            
                <div className='flex w-100 m-b-60' style={{justifyContent:'flex-end'}} >
                <div className='w-50  w-100  m-t-90 flex flex-between'>
                <Button  className='m-t-10.buttons' style={{borderRadius:'10px', marginTop:'10px', height:'42px', width:'120px', backgroundColor:'#5B0877', color:"white",}}>Back</Button>
                <Button onClick={redirect} className='m-t-10.buttons' style={{borderRadius:'10px', marginTop:'10px', height:'42px', backgroundColor:'transparent',}}>Continue</Button>
                </div>
            </div>
            </div>
        </div>
        <Modal
                    width="45%"
                    // confirmLoading
                    // okButtonProps={onclick=()=>{alert("How far")}}
                    closable
                    footer={false}
                    okText={<p style={{ maxWidth: "100px" }}>Boss</p>}
                    closeIcon={<CloseOutlined style={{ fontSize: "25px", backgroundColor: "red", color: "white", padding: "10px", marginLeft:"-0px" }} />}
                    visible={closeModal} onCancel={handleCancel1}>
                    <div style={{marginTop:"30px"}}>
                        <VerifyPhoneNum/>
                        {/* <Page30Form p = "Edit"
                            modalContent={modalContent1}
                            quant={3}
                        /> */}
                    </div>
                </Modal>
       </div>
    )
}
export default AccountSecurity;


