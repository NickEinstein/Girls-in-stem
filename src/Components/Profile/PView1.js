import React, { useState } from 'react';
import type { RadioChangeEvent, CheckboxValueType } from 'antd';

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

const PView1 = (prop) => {
    const [value, setValue] = useState(1);


const history = useNavigate()
    const redirect = ()=>{
        history('/sign-up/makes-great-profile')
        
    }

    const onChange1 = (checkedValues: CheckboxValueType[]) => {
        console.log('checked = ', checkedValues);
      };
      
      const plainOptions = ['Apple', 'Pear', 'Orange'];
      const options = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' },
      ];
      const optionsWithDisabled = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange', disabled: false },
      ];
      
    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
      };
    return (
        <div className='w-100 align-left'>

           {/* <div class="flex-between">
               <h1>Tier</h1>
               <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
           </div> */}
           <div className='p-40-0 border2b'>
               <h1>Category</h1>
               <p className='nine-size'>Choose a sutitable category, so that clients can find you with ease.</p>
               <div className='flex-between'>
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
                        <Select
                    showSearch
                    style={{
                      width: '45%', borderRadius:"20px"
                    }}
                    className='buttons'
                    placeholder="E.g  Select sub-category"
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

               <div className='p-40-0 '>
           <h1>Project Attribute</h1>
           <div className='flex-between'>
  
    <div>
        <h2 className='m-b-40'>Type</h2>
        <Checkbox.Group style={{display:'flex',flexDirection:'column', justifyContent:'space-between',height:`${options.length * 40}px` }} options={options} defaultValue={['Pear']} onChange={onChange1} />
    </div>
    <div>
    <h2 className='m-b-40'>Experience Level</h2>
        
        <Checkbox.Group style={{display:'flex',flexDirection:'column', justifyContent:'space-between',height:`${options.length * 40}px` }} options={options} defaultValue={['Pear']} onChange={onChange1} />
    </div>
    
           </div>

           </div>
           </div>

           <div className='p-40-0 border2b'>
           <h1>Title</h1>
           <TextArea className='br-20'rows={6} placeholder='I am great at e.g designing a responsive website '/>

           </div>
           <div className='p-40-0 '>
           <h1>Add Tags</h1>
           <TextArea className='br-20' rows={2} placeholder='search for tags that relates to your projects'/>

           </div>
        </div>
    )
}
export default PView1;
