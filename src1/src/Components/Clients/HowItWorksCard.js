import React from 'react';
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
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const HowItWorksCard = (prop) => {
const history = useNavigate()
    const redirect = ()=>{
        history('/sign-up/makes-great-profile')
    }
    return (
        <div className='w-25'>
            <div class="w-100">
                            <div className='relative flex-center c-white m-b-20' >
                                <img className="" style={{}} src={trustedBy1}/>
                                <p className='absolute large-font'>{prop.number}</p>
                            </div>

                                <img className="w-100" src={prop.image}/>
                                <h3  className='m-t-40 bold'>{prop.text}</h3>
                            </div>
                            
        </div>
    )
}
export default HowItWorksCard;
