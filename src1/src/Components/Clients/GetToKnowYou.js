import React from 'react';
import ReactDOM from 'react-dom';
import Section7Cards from '../Section7cards';
import trustedBy1 from '../../images/Rectangle.png'
import trustedBy2 from '../../images/Vector (3).png'
import trustedBy3 from '../../images/trustedBy-3.png'
import trustedBy4 from '../../images/trustedBy-4.png'
import NumberedCards from './NumberedCards';
import "antd/lib/button/style/index.css";
import "antd/lib/input/style/index.css";
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';


const GetToKnowYou = (prop) => {
    const history = useNavigate();

    // const {history} = 
    const redirect = ()=>{
        history('/sign-up/personal-info')
    }
    return (

       <div className='general-padding '>
        <h1 className='large-font'>Let us get to know you</h1>
        <h2 className=''>This will only take a few minutes</h2>

        <img src={trustedBy1}/>

        <p className='bold align-center'>We need to know about your education, experience and skills,  you can choose to import your information 
                                                                              And  you can always edit it.</p>
      
        <div className='flex w-100 flex-center m-b-60' >
            <div className='w-50  w-100  m-t-60 flex flex-vertical'>
            <Button block className='m-t-10.buttons' style={{borderRadius:'10px', marginTop:'10px', height:'42px', backgroundColor:'#5B0877', color:"white",}}>Back</Button>
            <Button block className='m-t-10.buttons' style={{borderRadius:'10px', marginTop:'10px', height:'42px', backgroundColor:'transparent',}}>Continue</Button>
            <Button onClick={redirect} block className='m-t-10.buttons' style={{borderRadius:'10px', marginTop:'10px', height:'42px', backgroundColor:'transparent',}}>Continue</Button>
            </div>
        </div>
       </div>
    )
}
export default GetToKnowYou;
