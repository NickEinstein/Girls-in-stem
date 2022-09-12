import React from 'react';
import ReactDOM from 'react-dom';
import Section7Cards from '../Section7cards';
import trustedBy1 from '../../images/image 5.png'
import trustedBy2 from '../../images/Vector (3).png'
import trustedBy3 from '../../images/trustedBy-3.png'
import trustedBy4 from '../../images/trustedBy-4.png'
import NumberedCards from './NumberedCards';
import "antd/lib/button/style/index.css";
import "antd/lib/input/style/index.css";
import { Button } from 'antd';


const CreateProfile = () => {
    return (

       <div className='general-padding '>
        <h2 className='m-b-50'>Tips on what makes a great profile</h2>
           <div class="flex-between">
               <NumberedCards below = {trustedBy1}/>
               <NumberedCards below = {trustedBy1}/>
               <NumberedCards below = {trustedBy1}/>
           </div>

        <div className='flex-between m-b-30'>
        <div className='m-t-40  flex-center bg-white flex-align ' style={{width:"26%"}}>
            <div >
                <div className='position-relative' >
                    <img src = {trustedBy2}/>
                    {/* <p className='absolute large-font c-white' style={{color:'red',}}>1</p> */}
                </div>
            </div>
           
        </div>
        <div className=' m-t-40 flex-center bg-white flex-align ' style={{width:"26%"}}>
            <div >
                <div className='position-relative' >
                    <img src = {trustedBy2}/>
                    {/* <p className='absolute large-font c-white' style={{color:'red',}}>1</p> */}
                </div>
            </div>
           
        </div>
        <div className=' m-t-40 flex-center bg-white flex-align ' style={{width:"26%"}}>
            <div >
                <div className='position-relative' >
                    <img src = {trustedBy2}/>
                    {/* <p className='absolute large-font c-white' style={{color:'red',}}>1</p> */}
                </div>
            </div>
           
        </div>
      
           
            
           
        </div>
        <div style={{display:'flex',justifyContent:'flex-end'}}>
            <div className='w-50 flex-between m-t-60'>
            <Button className='.buttons' style={{borderRadius:'10px', height:'42px', width:"110px", backgroundColor:'#5B0877', color:"white",}}>Back</Button>
            <Button className='.buttons' style={{borderRadius:'10px', height:'42px', width:"110px", backgroundColor:'transparent',}}>Continue</Button>
            </div>
        </div>
       </div>
    )
}
export default CreateProfile;
