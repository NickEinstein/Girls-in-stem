import React from 'react';
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
import { Button, Input, Select, DatePicker,Progress } from 'antd';
// import { Button, Input, Progress } from 'antd';

import 'antd/dist/antd.css'
import ProfileNav from './ProfileNav';
import ClientNavBar from './ClientNavBar';
import { useNavigate } from 'react-router-dom';
// import TextArea from 'antd/lib/input/TextArea';

const  {TextArea } = Input
const { Option } = Select;


const PersonalInfo = (prop) => {
    const  history = useNavigate();


    // const {history} = 
    const redirect = ()=>{
        history('/sign-up/professional-info')
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
                            <h1 classNpame='large-font bold m-b-40 m-r-20'>Work History</h1>
                            <AiOutlinePlusCircle style={{fontSize:'30px', marginTop:'10px', marginLeft:'30px'}}/>
                        </div>
                        <div style={{width:'40%', marginTop:'px'}}>
                            <p className='medium-size no-margin m-b-10px bold'>Completion rate</p>
                            <Progress className='' percent={50} status="active" style={{marginTop:'5px'}} />
                        </div>
            
                    </div>
                <h2 className='align-left'>If you have relevant work experience, add it here.</h2>
                </div>
                {/* <Progress className='' percent={50} status="active" style={{width:'100%', marginTop:'px'}}/> */}
                <div class="m-b-50 w-60 p-30-0 ">
                    <h2>Title</h2>
                    <Input className='buttons' placeholder='E.g UIUX Designer'/>
                </div>
            
                <div class="m-b-50 w-60 p-30-0 ">
                <h2>Company</h2>
                    <Input className='buttons' placeholder='E.g  Google'/>
                </div>
                <div class="m-b-50 w-60 p-30-0 ">
                        <h2>Location</h2>
            
                    <div class="flex-between">
                        <Input className='m-r-20 buttons' placeholder='E.g   London'/>
                        <Select
                showSearch
                style={{
                  width: '100%', borderRadius:"20px"
                }}
                className='buttons'
                placeholder="United Kingdom"
                optionFilterProp="children"
                filterOption={(input, option) => option.children.includes(input)}
                filterSort={(optionA, optionB) =>
                  optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                }
              >
                
                <Option className='buttons'  value="1">Not Identified</Option>
                <Option value="2">Closed</Option>
                <Option value="3">Communicated</Option>
                <Option value="4">Identified</Option>
                <Option value="5">Resolved</Option>
                <Option value="6">Cancelled</Option>
              </Select>
                        {/* <Input className='m-r-20 buttons' placeholder=''/> */}
                    </div>
                </div>
                <div class="m-b-50 ">
                <div class="flex-between">
                    <h2>Start Date</h2>
                    <h2>End Date</h2>
                </div>
                <div className="flex-between">
                    {/* <DatePicker.RangePicker  className='m-r-20' style={{ width: '60%', marginRight:'10px' }} /> */}
                    <DatePicker.RangePicker  style={{ width:'100%' }} />
                </div>
                </div>
            </div>
            <div class="align-left m-t-40">
                <h2 className='m-b-40'>Description</h2>
                <TextArea placeholder='Description' rows={10}/>
                <p className='m-b-40 m-t-5'>Minimum of  100 characters</p>
            </div>
            
            
            
            <div className='flex w-100 m-b-60' style={{justifyContent:'flex-end'}} >
                <div className='w-50  w-100  m-t-90 flex flex-between'>
                <Button  className='m-t-10.buttons' style={{borderRadius:'10px', marginTop:'10px', height:'42px', width:'120px', backgroundColor:'#5B0877', color:"white",}}>Back</Button>
                <Button onClick={redirect}  className='m-t-10.buttons' style={{borderRadius:'10px', marginTop:'10px', height:'42px', backgroundColor:'transparent',}}>Continue</Button>
                </div>
            </div>
        </div>
       </div>
    )
}
export default PersonalInfo;
