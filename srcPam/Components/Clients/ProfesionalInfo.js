
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


const ProfessionalInfo = (prop) => {
  const  history = useNavigate();


  // const {history} = 
  const redirect = ()=>{
      history('/sign-up/preview-professional-info')
  }
    return (

       <div className=' text-color-purple '>
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
                <h2 className='align-left no-margin'>Display your expertise her, let recruiters know your skills,</h2>
<h2 className='align-left'>area of work, certification and strengths. </h2>
                </div>

                <div class="m-b-50 w-80 p-30-0">
                    <h2>Cerification</h2>
                    <div className='flex-between'>
                      <Input className='buttons w-30' placeholder='Ceriticate Name'/>
                      <Input className='buttons w-30' placeholder='From: eg Microsoft'/>
                      <Input className='buttons w-30' placeholder='Year'/>
                    </div>

                    <div className='flex  w-100' style={{justifyContent:'flex-end'}} >
            <div className='w-50  w-100 p-30-0 flex'>
             <Button  className='m-t-10 buttons' style={{ marginLeft:'auto',Radius:'10px',  marginTop:'10px', height:'42px', width:'120px', backgroundColor:'#5B0877', color:"white",}}>Add</Button>
             </div>
         </div>
                </div>

                <div class="m-b-50 w-80 p--0 ">
                    <h2>Skills</h2>
                    <div className='flex-between'>
                    <Select
                showSearch
                style={{
                  width: '45%', borderRadius:"20px"
                }}
                className='buttons'
                placeholder="E.g  Photoshop"
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


              <Select
                showSearch
                style={{
                  width: '45%', borderRadius:"20px"
                }}
                className='buttons'
                placeholder="Experience Level"
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
                    </div>

                    <div className='flex  w-100 m-b-60' style={{justifyContent:'flex-end'}} >
            <div className='w-50  w-100 p-30-0 flex'>
             <Button  className='m-t-10 buttons' style={{ marginLeft:'auto',Radius:'10px',  marginTop:'10px', height:'42px', width:'120px', backgroundColor:'#5B0877', color:"white",}}>Add</Button>
             </div>
         </div>
                </div>

                {/* Start of Education */}
                
                <div class="m-b-50 w-80 p--0 ">
                    <h2>Education</h2>
                    <div className='flex-between'>
                    <Select
                showSearch
                style={{
                  width: '25%', borderRadius:"20px"
                }}
                className='buttons'
                placeholder="College/University Name"
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
              <Select
                showSearch
                style={{
                  width: '25%', borderRadius:"20px"
                }}
                className='buttons'
                placeholder="Counrty of College/University"
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
              <Select
                showSearch
                style={{
                  width: '25%', borderRadius:"20px"
                }}
                className='buttons'
                placeholder="Title"
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


              <Select
                showSearch
                style={{
                  width: '15%', borderRadius:"20px"
                }}
                className='buttons'
                placeholder="Year"
                optionFilterProp="children"
                filterOption={(input, option) => option.children.includes(input)}
                filterSort={(optionA, optionB) =>
                  optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                }
              >
                
                <Option className='buttons'  value="1">1990</Option>
                <Option value="2">1991</Option>
                <Option value="3">1992</Option>
                <Option value="4">1993</Option>
                <Option value="5">1994</Option>
                <Option value="6">1995</Option>
              </Select>
                    </div>

                    <div className='flex  w-100 m-b-60' style={{justifyContent:'flex-end'}} >
            <div className='w-50  w-100 p-30-0 flex'>
             <Button  className='m-t-10 buttons' style={{ marginLeft:'auto',Radius:'10px',  marginTop:'10px', height:'42px', width:'120px', backgroundColor:'#5B0877', color:"white",}}>Add</Button>
             </div>
         </div>
                </div>

                {/* End of Education */}

                {/* Start of Categories */}
                <div class="m-b-50 w-80 p--0 ">
                    <h2>Categories</h2>
                    <div className='flex-between'>
                    <Select
                showSearch
                style={{
                  width: '30%', borderRadius:"20px"
                }}
                className='buttons'
                placeholder="Select category "
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
              <Select
                showSearch
                style={{
                  width: '30%', borderRadius:"20px"
                }}
                className='buttons'
                placeholder="Select sub-category "
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
              <Select
                showSearch
                style={{
                  width: '30%', borderRadius:"20px"
                }}
                className='buttons'
                placeholder="Experience Level"
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


                    </div>

                    <div className='flex  w-100 m-b-60' style={{justifyContent:'flex-end'}} >
            <div className='w-50  w-100 p-30-0 flex'>
             <Button  className='m-t-10 buttons' style={{ marginLeft:'auto',Radius:'10px',  marginTop:'10px', height:'42px', width:'120px', backgroundColor:'#5B0877', color:"white",}}>Add</Button>
             </div>

            
         </div>
         <div className='w-50 w-100 p-10-0 flex-center'>
             <Button onClick={redirect}  className=' w-50 buttons' style={{ marginLeft:'auto',Radius:'10px',  marginTop:'0px', height:'42px', width:'120px', backgroundColor:'#5B0877', color:"white",}}>Continue</Button>
             </div>
                </div>
            {/* End of CAtegories */}
                
            </div>
        </div>
       </div>
    )
}
export default ProfessionalInfo;

