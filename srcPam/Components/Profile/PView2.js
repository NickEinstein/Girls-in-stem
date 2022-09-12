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
import SingleTier from './SingleTier';
import MultipleTier from './MultipleTier';
// import Input from 'antd/lib/input/Input';

const { Option } = Select;

const PView2 = (prop) => {
    const [value, setValue] = useState(1);
    const [single, setSingle] = useState(true);
    const [multiple, setMultiple] = useState(false);


const history = useNavigate()
    const redirect = ()=>{
        history('/sign-up/makes-great-profile')
        
    }

   
      const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
      };
    return (
        <div className='w-100 align-left'>

           <div class="flex-between w-40 p-40-0">
               <div>
                   <h1>Tier</h1>
                    <p className='nine-size'>Customize your project with 1 or 3 pricing tiers</p>
               </div>
               
                <div className='flex'>
                    <div onClick={()=>{setSingle(true); setMultiple(false)}} className='border2 m-r-10 pointer' style={{width:'20px', height:'20px', borderRadius:'50%', backgroundColor:single&&'yellowgreen'}}></div>
                    <p className='no-margin'>Single Tier</p>
                </div>
                <div className='flex'>
                    <div onClick={()=>{setMultiple(true); setSingle(false)}} className='border2 m-r-10 pointer' style={{width:'20px', height:'20px', borderRadius:'50%', backgroundColor:multiple&&'yellowgreen'}}></div>
                    <p className='no-margin'>Multiple Tier</p>
                </div>
              

           </div>
          {single && <SingleTier/>}
           {multiple&& <MultipleTier/>}

          
  
   
        </div>
    )
}
export default PView2;
  {/* <Radio.Group size='large' onChange={onChange} value={value}>
      <Radio size='large' value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      { <Radio value={3}>C</Radio> }
      { <Radio value={4}>D</Radio> }
    </Radio.Group> */}