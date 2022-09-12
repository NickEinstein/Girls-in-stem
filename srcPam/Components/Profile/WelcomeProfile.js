import React from 'react';
import ReactDOM from 'react-dom';
import Section7Cards from '../Section7cards';
import trustedBy1 from '../../images/Clapping tanned skin hands.png'
import trustedBy2 from '../../images/Vector (3).png'
import trustedBy3 from '../../images/trustedBy-3.png'
import trustedBy4 from '../../images/trustedBy-4.png'
// import NumberedCards from './NumberedCards';
import "antd/lib/button/style/index.css";
import "antd/lib/input/style/index.css";
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';


const WelcomeProfile = (prop) => {
    const history = useNavigate();

    // const {history} = 
    const redirect = ()=>{
        history('/sign-up/set-up-profile')
    }
    return (

       <div className='general-padding '>
        {/* <h1 className='large-font'>Let us get to know you</h1> */}
        <div>
            <h2 className=''>This will only take 6 simple steps</h2>
            <h2>and you will be on your way to start earning on Softwrk</h2>
            <img src={trustedBy1}/>
        </div>

              <div className='w-100 m-b-50 flex-center login'><Button onClick={redirect} className='p-40-0 m-t-60 w-50'>Continue to Profile Setup</Button></div>
       
       </div>
    )
}
export default WelcomeProfile;
