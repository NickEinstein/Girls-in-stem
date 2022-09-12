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
import { Button, Modal, Input, Select, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
// import NumberedHeader from './NumberedHeader';
import ProfileHeader from './ProfileHeader';
import TextArea from 'antd/lib/input/TextArea';
import PView1 from './PView1';
import PView2 from './PView2';
import PView3 from './PView3';
import PView4 from './PView4';
import PView5 from './PView5';
import PView6 from './PView6';
import {

    CloseOutlined,
    SearchOutlined,
  } from '@ant-design/icons';
import ClientNavBar from '../Clients/ClientNavBar';
// import Input from 'antd/lib/input/Input';

const { Option } = Select;

const SetUpProfile = (prop) => {
    const [value, setValue] = useState(1);
    const [modal1Visible, setModal1Visible] = useState(false);

const history = useNavigate()
    const redirect = ()=>{
        history('/sign-up/makes-great-profile')
        
    }

    const handleCancel1 = ()=>{
        setModal1Visible(false)
      }

    const onChange = (val) => {
        console.log('val = ', val);
        setValue(val)
      };

      const next = (val) => {
        console.log('val = ', value);
        if(value <6)
        setValue(value+1)
      };
      const prev = (val) => {
        console.log('val = ', value);
        if(value >1)
        setValue(value-1)
      };
      
      
    return (
        <div className='w-100' style={{marginTop:'-60px'}}>
           <ClientNavBar/>

           <div className='p-40 general-padding align-center'>
            <h1>Hey Raymond</h1>
            <p className='p-30-0'>Congratulations! </p>

            <p>You have created a project on Softwrk!</p>
            <p>This will be reviewed by our team and feedback provided</p>
           </div>


            
        </div>
    )
}
export default SetUpProfile;
