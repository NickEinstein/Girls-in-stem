import React, { useState } from 'react';
import type { RadioChangeEvent, CheckboxValueType } from 'antd';

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

const PView3 = (prop) => {
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
        <div className='w-100 align-left p3'>

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
               <h1>Gallery</h1>
               <p className='nine-size'>Convince your buyer with an amazing gallery, upload quality images and videos. </p>
               

               <div className='p-40-0 w-80'>
           <h1>Add Images (MAX 3) </h1>
           <p class="nine-size">Upload up to 20 images (.jpg or .png), </p>
            <p class="nine-size">up to 10MB each and less than 4000 pixels, in width or height.</p>          

           <div className='flex-between m-t-60'>
  
    <div class="w-30"><UploadButton style={{width:'400px'}}/></div>
    <div class="w-30"><UploadButton/></div>
    <div class="w-30"><UploadButton/></div>
    
           </div>

           </div>
           </div>

           <div className='p-40-0 border2b'>
           <div className='p-40-0 w-80'>
           
           <div class="align-left w-30 ">
           
               <div class="align-center">
               <h1>Add Video </h1>
                   <p class="nine-size">Upload a video that highlights your services.</p>
               
                   <p class="nine-size">Your video should not be more than 75 seconds </p>
                   <p class="nine-size">and smaller than 50MB         </p>
               </div>
               <div className='flex-between m-t-60'>
  
                <div style={{width:'400px', marginLeft:"40px"}} class="w-30 m-l-30"><UploadButton image={trustedBy1}/></div>
                {/* <div class="w-30"><UploadButton/></div> */}
                {/* <div class="w-30"><UploadButton/></div> */}
    
           </div>
           </div>                    

           </div>

           </div>

           <div class="align-left w-50 m-t-60">
           
               <div class="">
               <h1>Add Document(Max 2) </h1>
                   <p class="nine-size">Show some of the best work you created in a document (PDFs only).</p>
               
               </div>
               <div className='flex-between m-t-60'>
  
                <div  class=""><UploadButton image={trustedBy10}/></div>
                <div  class=""><UploadButton image={trustedBy10}/></div>
                
    
           </div>
           </div>


           
        </div>
    )
}
export default PView3;
