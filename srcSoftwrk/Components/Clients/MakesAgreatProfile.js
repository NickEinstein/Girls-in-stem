import React from 'react';
import ReactDOM from 'react-dom';
import Section7Cards from '../Section7cards';
import trustedBy1 from '../../images/Ellipse 11.png'
import trustedBy2 from '../../images/trustedBy-2.png'
import trustedBy3 from '../../images/Vector (6).png'
import trustedBy6 from '../../images/Vector (7).png'
import trustedBy7 from '../../images/Vector (8).png'
import trustedBy8 from '../../images/Other 15.png'
// import trustedBy7 from '../../images/image 5.png'
import trustedBy4 from '../../images/Frame 41 (3).png'
import { Button } from 'antd';
import ClientNavBar from './ClientNavBar';
import { useNavigate } from 'react-router-dom';

const MakesAgreatProfile = (prop) => {
    const history  = useNavigate();

    // const {history} = 
    const redirect = ()=>{
        history('/sign-up/get-to-know-you')
    }

    const goBack = ()=>{
history(-1)
    }
    return (
        <div className=' bg-white'>
            <ClientNavBar/>
            <div className='general-padding w-100 ' style={{padding:'0px 9%'}}>
                <h1 className='large-font  w-100 m-t-40'>Tips on what makes a great profile</h1>
                
                <div className='flex-align flex-center  w-100'>
                    <div className='m-t-30  align-center w-100' >
                        <div className="flex-between w-100 m-b-50">
                            <div class="w-25">
                            <div className='relative flex-center c-white m-b-20' >
                                <img className="" style={{}} src={trustedBy1}/>
                                <p className='absolute large-font'>1</p>
                            </div>

                                <h3  className='m-t-40 bold'>Put a face to your name! 
Upload a profile picture that clearly shows your face</h3>
                                <img className="w-100 m-t-30" style={{width:'100px'}} src={trustedBy3}/>

                            </div>
                            <div class="w-25">
                            <div className='relative flex-center c-white m-b-20' >
                                <img className="" style={{}} src={trustedBy1}/>
                                <p className='absolute large-font'>2</p>
                            </div>

                                <h3  className='m-t-40 bold'>A complete profile converts more, 
so take your timeand create a perfect profile</h3>
<img className="w-100 m-t-30" style={{width:'100px'}} src={trustedBy6}/>

                            </div>
                            <div class="w-25">
                            <div className='relative flex-center c-white m-b-20' >
                                <img className="" style={{}} src={trustedBy1}/>
                                <p className='absolute large-font'>3</p>
                            </div>

                                <h3  className='m-t-40 bold'>Accurately describe your professional skills to
 help you get more work.</h3>
 <img className="w-100 m-t-30" style={{width:'100px'}} src={trustedBy7}/>

                            </div>
                            {/* <img className="w-25" src={trustedBy1}/>
                            <img className="w-25" src={trustedBy1}/> */}
                           
                        </div>
                        

                        <div className='flex' style={{justifyContent:'flex-end'}}>
                            <div className='w-50 login-bck m-r-20 m-t-50 m-b-50 flex' style={{justifyContent:'flex-end'}}>
                                <Button className='buttons m-r-50' onClick={goBack}>Back</Button>
                                <Button onClick={redirect} className='buttons'>Continue</Button>
                            </div>
                        </div>                     
                    </div>
                </div>
            </div>
           
        </div>
    )
}
export default MakesAgreatProfile;
