import React, { useState } from 'react';
// import type { RadioChangeEvent, CheckboxValueType } from 'antd';

import ReactDOM from 'react-dom';
import Section7Cards from '../Section7cards';
import trustedBy1 from '../../images/Ellipse 11.png'
import trustedBy2 from '../../images/trustedBy-2.png'
import trustedBy3 from '../../images/image 5.png'
import trustedBy6 from '../../images/Other 02.png'
import trustedBy7 from '../../images/Other 18.png'
import trustedBy8 from '../../images/Other 15.png'
// import trustedBy7 from '../../images/image 5.png'
import trustedBy4 from '../../images/Frame 41 (3).png'
import { Button, Radio, Input, Select, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
// import NumberedHeader from './NumberedHeader';
import ProfileHeader from './ProfileHeader';
import TextArea from 'antd/lib/input/TextArea';
// import Input from 'antd/lib/input/Input';

const { Option } = Select;

const MultipleTier = (prop) => {
    const [value, setValue] = useState(1);
    const [single, setSingle] = useState(true);
    const [multiple, setMultiple] = useState(true);


const history = useNavigate()
    const redirect = ()=>{
        history('/sign-up/makes-great-profile')
        
    }

   
    //   const onChange = (e: RadioChangeEvent) => {
    //     console.log('radio checked', e.target.value);
    //     setValue(e.target.value);
    //   };
    return (
        <div className='w-100 align-left flex-between'>

          
           {/* First Col */}
           <div className='w-30'>
               <div className='p-40-0 '>
               <h2>Basic Package</h2>
                   <div className=' w-100 '>
                    <div className=' w-100'>
                    <h2>Name</h2>
                        <TextArea className='w-100 br-20' rows={4}/>
                    </div>
                    
                   </div>
               
               </div>
               {/* End */}
               {/* Start */}
               <div className='p-40-0 '>
               
                   <div className=' w-100 '>
                    <div className=' w-100'>
                    <h2>Descriptions</h2>
                        <TextArea className='w-100 br-20' rows={4}/>
                    </div>
                    <div className='w-100 m-t-30'>
                    <h2>Review</h2>
                    <p className='nine-size'>
                    Number of times you will review the work
                        
                    </p>
                    <Select
                            showSearch
                            style={{
                              width: '85%', borderRadius:"20px"
                            }}
                            className='buttons'
                            placeholder=""
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

                          <div className='w-100 m-t-60'>
                    <h2>Delivery Time</h2>
                    <p className='nine-size'>Set a realistic timeline and ensure to deliver within timeline </p>
                    <Select
                            showSearch
                            style={{
                              width: '85%', borderRadius:"20px"
                            }}
                            className='buttons'
                            placeholder="Delivery time"
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
                    </div>
                   </div>
                           </div>
                           {/* End */}
                           <div class="p-40-0 br-20 login">
                            <h2 className=''>Price</h2>
                            <Input className='w-60 m-t-40' placeholder='$'/>
                            </div>
           </div>


           {/* Second Col */}
          

           <div className='w-30'>
               <div className='p-40-0 '>
               <h2>Standard Package</h2>
                   <div className=' w-100 '>
                    <div className=' w-100'>
                    <h2>Name</h2>
                        <TextArea className='w-100 br-20' rows={4}/>
                    </div>
                    
                   </div>
               
               </div>
               {/* End */}
               {/* Start */}
               <div className='p-40-0 '>
               
                   <div className=' w-100 '>
                    <div className=' w-100'>
                    <h2>Descriptions</h2>
                        <TextArea className='w-100 br-20' rows={4}/>
                    </div>
                    <div className='w-100 m-t-30'>
                    <h2>Review</h2>
                    <p className='nine-size'>
                    Number of times you will review the work
                        
                    </p>
                    <Select
                            showSearch
                            style={{
                              width: '85%', borderRadius:"20px"
                            }}
                            className='buttons'
                            placeholder=""
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

                          <div className='w-100 m-t-60'>
                    <h2>Delivery Time</h2>
                    <p className='nine-size'>Set a realistic timeline and ensure to deliver within timeline </p>
                    <Select
                            showSearch
                            style={{
                              width: '85%', borderRadius:"20px"
                            }}
                            className='buttons'
                            placeholder="E.g  Delivery time"
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
                    </div>
                   </div>
                           </div>
                           {/* End */}
                           <div class="p-40-0 br-20 login">
                            <h2 className=''>Price</h2>
                            <Input className='w-60 m-t-40' placeholder='$'/>
                            </div>
           </div>

                                                    {/* Third Col */}

       
                                                    <div className='w-30'>
               <div className='p-40-0 '>
               <h2>Mega Package</h2>
                   <div className=' w-100 '>
                    <div className=' w-100'>
                    <h2>Name</h2>
                        <TextArea className='w-100 br-20' rows={4}/>
                    </div>
                    
                   </div>
               
               </div>
               {/* End */}
               {/* Start */}
               <div className='p-40-0 '>
               
                   <div className=' w-100 '>
                    <div className=' w-100'>
                    <h2>Descriptions</h2>
                        <TextArea className='w-100 br-20' rows={4}/>
                    </div>
                    <div className='w-100 m-t-30'>
                    <h2>Review</h2>
                    <p className='nine-size'>
                    Number of times you will review the work
                        
                    </p>
                    <Select
                            showSearch
                            style={{
                              width: '85%', borderRadius:"20px"
                            }}
                            className='buttons'
                            placeholder=""
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

                          <div className='w-100 m-t-60'>
                    <h2>Delivery Time</h2>
                    <p className='nine-size'>Set a realistic timeline and ensure to deliver within timeline </p>
                    <Select
                            showSearch
                            style={{
                              width: '85%', borderRadius:"20px"
                            }}
                            className='buttons'
                            placeholder="  Delivery time"
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
                    </div>
                   </div>
                           </div>
                           {/* End */}
                           <div class="p-40-0 br-20 login">
                            <h2 className=''>Price</h2>
                            <Input className='w-60 m-t-40' placeholder='$'/>
                            </div>
           </div>




             
  
   
        </div>
    )
}
export default MultipleTier;
  {/* <Radio.Group size='large' onChange={onChange} value={value}>
      <Radio size='large' value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      { <Radio value={3}>C</Radio> }
      { <Radio value={4}>D</Radio> }
    </Radio.Group> */}