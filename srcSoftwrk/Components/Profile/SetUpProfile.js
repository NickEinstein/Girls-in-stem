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
import ProfileSuccess from './ProfileSuccess';

import {

    CloseOutlined,
    SearchOutlined,
  } from '@ant-design/icons';
// import Input from 'antd/lib/input/Input';

const { Option } = Select;

const SetUpProfile = (prop) => {
    const [value, setValue] = useState(1);
    const [modal1Visible, setModal1Visible] = useState(false);

const history = useNavigate()
    const redirect = ()=>{
        history('/sign-up/makes-great-profile')
        
    }

    const openModal = ()=>{
        setModal1Visible(true)
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
        <div className='w-100 general-padding align-left'>
           <ProfileHeader onChange={onChange}/>

          
           {value==1 &&< PView1  onChange ={onChange}/>}
           {value==2 && <PView2 onChange ={onChange}/>}
           {value==3 && <PView3 onChange ={onChange}/>}
           {value==4 && <PView4 onChange ={onChange}/>}
           {value==5 && <PView5 onChange ={onChange}/>}
           {value==6 && <PView6 onChange ={onChange}/>}

           <div className='flex w-100 m-b-60 m-t-60' style={{justifyContent:'flex-end'}} >
                { value !=6 && <div className='w-50  w-100  m-t-90 flex flex-between'>
                <Button onClick={prev} className='m-t-10.buttons' style={{borderRadius:'10px', marginTop:'10px', height:'42px', width:'120px', backgroundColor:'#5B0877', color:"white",}}>Back</Button>
                <Button onClick={next} className='m-t-10.buttons' style={{borderRadius:'10px', marginTop:'10px', height:'42px', backgroundColor:'transparent',}}>Continue</Button>
                </div>}
                {value==6 &&
                    <div className='w-50  w-100  m-t-90 flex flex-between'>
                    <Button onClick={prev} className='m-t-10.buttons' style={{borderRadius:'10px', marginTop:'10px', height:'42px', width:'120px', backgroundColor:'#5B0877', color:"white",}}>Save as Draft</Button>
                    <Button onClick={openModal} className='m-t-10.buttons' style={{borderRadius:'10px', marginTop:'10px', height:'42px', backgroundColor:'transparent',}}>Submit</Button>
                    </div>
                }
            </div>



            <Modal
                    width="75%"
                    // confirmLoading
                    // okButtonProps={onclick=()=>{alert("How far")}}
                    closable
                    footer={false}
                    okText={<p style={{ maxWidth: "100px" }}>Boss</p>}
                    // closeIcon={<CloseOutlined style={{ fontSize: "25px", backgroundColor: "red", color: "white", padding: "10px", marginLeft:"-0px" }} />}
                    visible={modal1Visible} onCancel={handleCancel1}>
                    <div style={{marginTop:"30px"}}>
                        <ProfileSuccess/>
                        {/* <Page30Form p = "Edit"
                            modalContent={modalContent1}
                            quant={3}
                        /> */}
                    </div>
                </Modal>

            
        </div>
    )
}
export default SetUpProfile;
