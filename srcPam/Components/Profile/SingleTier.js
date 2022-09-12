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

const SingleTier = (prop) => {
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
        <div className='w-100 align-left'>

           {/* <div class="flex-between p-40-0">
               <div>
                   <h1>Tier</h1>
                    <p className='nine-size'>Customize your project with 1 or 3 pricing tiers</p>
               </div>
               
                <p>Single Tier</p>
                <p>Multiple Tier</p>

           </div> */}
           {/* Start */}
           <div className='p-40-0 border2b'>
           <h2>Basic</h2>

               <div className='flex-between w-100 '>
                <div className=' w-40'>
                <h2>Name</h2>
                    <TextArea className='w-100 br-20' rows={6}/>
                </div>
                <div className='w-40'>
                <h2>Delivery Time</h2>
                <Select
                        showSearch
                        style={{
                          width: '45%', borderRadius:"20px"
                        }}
                        className='buttons'
                        placeholder="E.g  Select Category"
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
           {/* End */}
{/* Start */}
           <div className='p-40-0 border2b'>
           <h2>Basic</h2>

               <div className='flex-between w-100 '>
                <div className=' w-40'>
                <h2>Descriptions</h2>
                    <TextArea className='w-100 br-20' rows={6}/>
                </div>
                <div className='w-40'>
                <h2>Review</h2>
                <Select
                        showSearch
                        style={{
                          width: '45%', borderRadius:"20px"
                        }}
                        className='buttons'
                        placeholder="E.g  Select Category"
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
                       {/* End */}
                       <div class="p-40-0 br-20 login">
                        <h2 className=''>Price</h2>

                        <Input className='w-20 m-t-40' placeholder='$'/>
                        </div>

          




             
  
   
        </div>
    )
}
export default SingleTier;
  {/* <Radio.Group size='large' onChange={onChange} value={value}>
      <Radio size='large' value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      { <Radio value={3}>C</Radio> }
      { <Radio value={4}>D</Radio> }
    </Radio.Group> */}