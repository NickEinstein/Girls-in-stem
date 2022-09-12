import React from 'react';
import ReactDOM from 'react-dom';
import Section7Cards from '../Section7cards';
import trustedBy1 from '../../images/Ellipse 11.png'
import trustedBy2 from '../../images/trustedBy-2.png'
import trustedBy3 from '../../images/image 5.png'
import trustedBy6 from '../../images/Other 02.png'
import trustedBy9 from '../../images/Other 15.png'
import trustedBy7 from '../../images/Other 18.png'
import HowItWorksCard from './HowItWorksCard'
// import trustedBy7 from '../../images/image 5.png'
import trustedBy4 from '../../images/Frame 41 (3).png'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const DashboardSection3 = (prop) => {
const history = useNavigate()
    const redirect = ()=>{
        history('/sign-up/makes-great-profile')
    }
    return (
        <div className='general-padding  flex-center bg-white flex-align'>
            <div className='m-t-40 w-100  p-40'>
                <h1 className='large-font  w-100'>How It Works</h1>
                
                <div className='flex-align flex-center  w-100'>
                    <div className='m-t-30  align-center w-100' >
                        <div className="flex-between w-100">
                        <HowItWorksCard image = {trustedBy3} number='1' text = ' Register on SoftWrk & List your services '/>
                        <HowItWorksCard image = {trustedBy7} number='2' text ='Get an order for a service you offer'/>
                        <HowItWorksCard image = {trustedBy9} number='3' text ='Deliver on service request'/>
                            
                           
                           
                        </div>
                        <div className="flex-center w-100 m-t-30">
                        <HowItWorksCard image = {trustedBy6} number='4' text ='Get paid upon acceptance of job by customer'/>
                        
                           
                        </div> 

                        <div className='flex' style={{justifyContent:'flex-end'}}>
                            <div className='w-50 m-r-20 m-t-50 flex' style={{justifyContent:'flex-end'}}>
                                {/* <Button className='buttons '>Skip for now</Button> */}
                                <Button onClick={redirect} className='buttons'>Continue to Create Profile</Button>
                            </div>
                        </div>                     
                    </div>
                </div>
            </div>
           
        </div>
    )
}
export default DashboardSection3;
