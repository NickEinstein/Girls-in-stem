
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
import {

    CloseOutlined,
    SearchOutlined,
  } from '@ant-design/icons';
// import { Button, Input, Progress } from 'antd';

import 'antd/dist/antd.css'
import ProfileNav from './ProfileNav';
import ClientNavBar from './ClientNavBar';
import { useNavigate } from 'react-router-dom';
// import TextArea from 'antd/lib/input/TextArea';

const  {TextArea } = Input
const { Option } = Select;


const PreviewProfessionalInfo = (prop) => {
    const [closeModal, setCloseModal] = useState(false)
  const  history = useNavigate();

  // const {history} = 
  const handleCancel1 = ()=>{
    setCloseModal(false)
  }
  const redirect = ()=>{
      history('/sign-up/link-accounts')
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
                            <h1 classNpame='large-font bold m-b-40 m-r-20'>Professional  Information</h1>
                            {/* <AiOutlinePlusCircle style={{fontSize:'30px', marginTop:'10px', marginLeft:'30px'}}/> */}
                        </div>
                        <div style={{width:'40%', marginTop:'px'}}>
                            <p className='medium-size no-margin m-b-10px bold'>Completion rate</p>
                            <Progress className='' percent={50} status="active" style={{marginTop:'5px'}} />
                        </div>
            
                    </div>
                <p className='align-left no-margin'>If you have relevant work experience, add it here.</p>
                </div>

                <div class="m-b-50 w-100 p-30-0">
                    <h2>Cerification</h2>
                    <div className='flex-between w-100' >
                        <div className='w-80' style={{border:'2px solid #370548', borderRadius:'20px',}}>
                        <div className='flex-between m-b-20' style={{backgroundColor:'#0202AD4D',borderRadius:'20px', padding:'10px' }}>
                            <p className='no-margin'>Certificate</p> 
                            <p className='no-margin'>Year</p> 
                        </div>

                        <div className='flex-between buttons m-b-20' style={{backgroundColor:'',borderRadius:'20px', padding:'10px' }}>
                            <p className='no-margin'>User Experience</p> 
                            <p className='no-margin'>2022</p> 
                        </div>

                        </div>
                    </div>

                </div>

                <div class="m-b-50 w-100 p-30-0">
                    <h2>Skills</h2>
                    <div className='flex-between w-100' >
                        <div className='w-80' style={{border:'2px solid #370548', borderRadius:'20px',}}>
                        <div className='flex-between m-b-20' style={{backgroundColor:'#0202AD4D',borderRadius:'20px', padding:'10px' }}>
                            <p className='no-margin'>Skill</p> 
                            <p className='no-margin'>Year</p> 
                        </div>

                        <div className='flex-between buttons m-b-20' style={{backgroundColor:'',borderRadius:'20px', padding:'10px' }}>
                            <p className='no-margin'>Level</p> 
                            <p className='no-margin'>Expert</p> 
                        </div>

                        </div>
                    </div>

                </div>

                <div class="m-b-50 w-100 p-30-0">
                    <h2>Education</h2>
                    <div className='flex-between w-100' >
                        <div className='w-80' style={{border:'2px solid #370548', borderRadius:'20px',}}>
                        <div className='flex-between m-b-20' style={{backgroundColor:'#0202AD4D',borderRadius:'20px', padding:'10px' }}>
                            <p className='no-margin'>Certificate</p> 
                            <p className='no-margin'>Year</p> 
                        </div>

                        <div className='flex-between buttons m-b-20' style={{backgroundColor:'',borderRadius:'20px', padding:'10px' }}>
                            <p className='no-margin'>Law</p> 
                            <p className='no-margin'>Graduated 2022</p> 
                        </div>

                        </div>
                    </div>

                </div>

                <div className='flex  w-80 m-b-60 ' style={{justifyContent:'flex-end'}} >
            <div className='w-50  w-100 p-30-0  flex' style={{justifyContent:'flex-end'}}>
             <Button  className='m-t-10 buttons' style={{ marginLeft:'auto',Radius:'10px',  marginTop:'10px', height:'42px', width:'120px', backgroundColor:'#5B0877', color:"white",}}>Cancel</Button>
             <Button onClick={redirect}  className='m-t-10 buttons' style={{ marginLeft:'auto',Radius:'10px',  marginTop:'10px', height:'42px', width:'120px', backgroundColor:'#5B0877', color:"white",}}>Continue</Button>
             </div>

            
         </div>

                
                {/* Make this into a component */}

                {/* Start of Categories */}
                            {/* End of CAtegories */}
                
            </div>
        </div>
        
       </div>
    )
}
export default PreviewProfessionalInfo;

