import React from 'react';
import ReactDOM from 'react-dom';
// import trustedBy1 from './images/trustedBy-1.png'
// import trustedBy2 from './images/trustedBy-2.png'
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import VectorCards from './VectorCards'
import { BsYoutube,BsFacebook,BsInstagram, BsApple, BsFillFileEarmarkCodeFill, BsHeadphones } from 'react-icons/bs';
import { AiFillAndroid,AiOutlineCopyright, AiFillUnlock } from 'react-icons/ai';

const DashboardSection4 = () => {
    return (
        <div className='bg-white' style={{paddingBottom:'100px', marginTop:"150px", backgroundColor:'#FAFAFA'}} >
            <div className='w-100 '>
                <h1 className='p-20' style={{paddingTop:'50px'}}>Why Choose Softwrk?</h1>
                
                <div className='flex-align flex-center'>
                    <div className='flex-align w-80 flex-between m-t-50'>
                        <div class="m-r-20">
                            <VectorCards text = 'Proof of Quality'  image ={<BsFillFileEarmarkCodeFill style={{fontSize:"32px"}}/>}/>
                        </div>
                        <div class="m-r-20">
                            <VectorCards text = 'Protected Payment'  image ={<AiFillUnlock style={{fontSize:"32px"}}/>}/>
                        </div>
                        <div class="m-r-20">
                            <VectorCards text = 'Payment is released only when you certify work done'  image ={<AiFillUnlock style={{fontSize:"32px"}}/>}/>
                        </div>
                        <div class="m-r-20">
                            <VectorCards  text = '24/7 Customer Service' image ={<BsHeadphones style={{fontSize:"32px"}}/>}/>
                        </div>
                    
                        {/* <img src = {VectorCards}/> */}
                    </div>
                </div>
            </div>
           
        </div>
    )
}
export default DashboardSection4;
