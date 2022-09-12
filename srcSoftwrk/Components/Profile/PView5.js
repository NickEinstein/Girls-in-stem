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
import MileStones from './MileStones';
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
                   <h1>Description</h1>
                   <p className='nine-size'>Describe your project, tell the client what sets your project apart. Sell your project  </p>
                   <TextArea  
                   placeholder='Example: I am an award winning designer,  with over 10 years experience in designing, I design with the goal of promoting my client’s business.
                    It is all about conversion and retention for me.' 
                    className='m-t-40 br-20' rows={4}/>
                   
               </div>
           </div>

           <MileStones/>

           
           
        </div>
    )
}
export default PView4;
