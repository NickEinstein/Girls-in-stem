import React, { useState } from 'react';
// import type { RadioChangeEvent, CheckboxValueType } from 'antd';

import ReactDOM from 'react-dom';
import Section7Cards from '../Section7cards';
import trustedBy1 from '../../images/Vector (9).png'
import trustedBy10 from '../../images/Vector (10).png'
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
import UploadButton from '../UploadButton';
// import Input from 'antd/lib/input/Input';

const { Option } = Select;

const PView4 = (prop) => {
    const [value, setValue] = useState(1);


const history = useNavigate()
    const redirect = ()=>{
        history('/sign-up/makes-great-profile')
        
    }

    
      
    
    return (
        <div className='w-100 align-left p3'>

          
           <div className='p-40-0 border2b m-t-40'>
               <div class="w-60">
                   <h1>Requirement</h1>
                   <p className='nine-size'>Do you need any information or document from the client? Ask them for it. </p>
                   <TextArea  placeholder='Do you need any information or document from the client? Ask them for it.' className='m-t-40 br-20' rows={4}/>
                   
               </div>
           </div>

           <div className='p-40-0 m-t-40'>
           <h2>Type of Answer</h2>

           <Select
                    showSearch
                    style={{
                      width: '25%', borderRadius:"20px", marginTop:'40px'
                    }}
                    className='buttons'
                    placeholder="Type Text"
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
    )
}
export default PView4;
