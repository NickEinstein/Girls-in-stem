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

const MileStones = (prop) => {
    const [value, setValue] = useState(1);
    const [single, setSingle] = useState(true);
    const [multiple, setMultiple] = useState(true);


const history = useNavigate()
    const redirect = ()=>{
        history('/sign-up/makes-great-profile')
        
    }

   
    
    return (
        <div className='w-100 align-left '>

           {/* <div class="flex-between p-40-0">
               <div>
                   <h1>Tier</h1>
                    <p className='nine-size'>Customize your project with 1 or 3 pricing tiers</p>
               </div>
               
                <p>Single Tier</p>
                <p>Multiple Tier</p>

           </div> */}
           {/* Start */}
           <div className='p-40-0'>
           <h2 className='p-40-0'>Milestones</h2>

           <div className=''>
            {/* Top */}
            <ul className='flex '>
                <p style={{marginRight:'30%',}} className='w-20'>First Milestone</p>
                <div className='flex-between w-80'>
                    <p>Basic Package $100</p>
                    <p>Standard Package $150</p>
                    <p>Mega Package $200</p>
                </div>                
            </ul>
            <div className=' w-100 border3 p-20'>
            <div className='flex-between w-100'>
                <div className='w-40 'style={{marginRight:'10%',}}>
                <div className='m-b-60'>
                       
                    </div>
                    <h2>Title</h2>
                    <p className='nine-size'>Give your milestone a name e.g. Onboarding.</p>
                    <TextArea rows={4}/>
                
                </div>

                <div className='w-60 flex-between flex-align align-left'>
                    <div>
                        <p className='m-b-60'>Delivery time/Price</p>
                        <p>0 days</p>
                        <div className='border3' style={{width:'60px', height:'60px'}}></div>
                    </div>
                    <div>
                        <p className='m-b-60'>Delivery time/Price</p>
                        <p>0 days</p>
                        <div className='border3' style={{width:'60px', height:'60px'}}></div>
                    </div>
                    <div>
                        <p className='m-b-60'>Delivery time/Price</p>
                        <p>0 days</p>
                        <div className='border3' style={{width:'60px', height:'60px'}}></div>
                    </div>
                    <div>
                        <p className='m-b-60'>Delivery time/Price</p>
                        <p>0 days</p>
                        <div className='border3' style={{width:'60px', height:'60px'}}></div>
                    </div>
                </div>
            </div>



            <div className='flex-between w-100 m-t-60'>
                <div className='w-40 'style={{marginRight:'10%',}}>
                
                    <h2>Expected Deliverables</h2>
                    <p className='nine-size'>Tell your clients what they should expect at this stage</p>
                    <TextArea rows={4}/>
                
                </div>

                <div className='w-60  flex-between flex-align m-t-50 align-left'>
                    <div>
                       
                        <div className='border3' style={{width:'60px', height:'60px'}}></div>
                    </div>
                    <div>
                       
                        <div className='border3' style={{width:'60px', height:'60px'}}></div>
                    </div>
                    <div>
                       
                        <div className='border3' style={{width:'60px', height:'60px'}}></div>
                    </div>
                    <div>
                       
                        <div className='border3' style={{width:'60px', height:'60px'}}></div>
                    </div>
                </div>
            </div>
            </div>



           </div>
           </div>


          




             
  
   
        </div>
    )
}
export default MileStones;
  {/* <Radio.Group size='large' onChange={onChange} value={value}>
      <Radio size='large' value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      { <Radio value={3}>C</Radio> }
      { <Radio value={4}>D</Radio> }
    </Radio.Group> */}