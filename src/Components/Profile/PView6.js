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
    const [tick, settick] = useState(false);
    const [tick2, settick2] = useState(false);


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

          
           <div className='p-40-0 border2b'>
               <h1>Review</h1>
               <p className='nine-size'>Please review and thick the boxes .</p>
               
            </div>

            <div className='p-40-0 border2b'>
               <h1>Copyright Notice</h1>
               <p className='nine-size'>By submitting your project, you declare that you either own or have rights to the material posted and that posting these materials does not infringe on any third party's rights. </p>
                <p className='nine-size'>Also note that your work will be reviewed by Softwrk to ensure to meets up to criteria and requirement of Softwrk</p>
               
            </div>

            <div className='p-40-0 border2b'>
               <h1>Terms of Use</h1>
               <p className='nine-size'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra lorem augue molestie egestas eu elementum at id accumsan.</p>
                <p className='nine-size'> Ultrices massa amet proin mauris tortor, convallis bibendum.</p>

                <p onClick={()=>settick(!tick)} className='pointer tick-box border3' style={{backgroundColor:tick?'#00B84A':'transparent'}}></p>
               
            </div>

            <div className='p-40-0 border2b'>
               <h1>Copyright Notice</h1>
               <p className='nine-size'>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra lorem augue molestie egestas eu elementum at id accumsan.
                 </p>
                <p className='nine-size'>Ultrices massa amet proin mauris tortor, convallis bibendum.</p>
                <p onClick={()=>settick2(!tick2)} className='pointer tick-box border3' style={{backgroundColor:tick2?'#00B84A':'transparent'}}></p>
               
            </div>
           
  
    
        </div>
    )
}
export default PView1;
