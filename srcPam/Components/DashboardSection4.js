import React from 'react';
import ReactDOM from 'react-dom';
// import trustedBy1 from './images/trustedBy-1.png'
// import trustedBy2 from './images/trustedBy-2.png'
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import clients from '../images/Ellipse 50.png'
import clients1 from '../images/Ellipse 51.png'
import clients2 from '../images/Ellipse 52.png'
import VectorCards from './VectorCards'
import PictureAndText from './PictureAndText'
import { BsYoutube,BsFacebook,BsInstagram, BsApple, BsFillFileEarmarkCodeFill, BsHeadphones } from 'react-icons/bs';
import { AiFillAndroid,AiOutlineCopyright, AiFillUnlock } from 'react-icons/ai';

const DashboardSection4 = () => {

   
    let p = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla vulputate cras tellus non ipsum amet, tincidunt. Varius integer sit sagittis rhoncus eu et volutpat consectetur. A, massa ac, erat donec at id nisl, tellus. In mattis velit mauris, nisl semper. Laoreet nunc eros amet habitant dolor, habitasse id volutpat. Id egestas urna purus enim massa id ultricies etiam. Enim, tellus quis urna tempor aliquam eu fermentum, mi. Nam sapien dolor, sem diam enim pellentesque ac. Neque id ut id montes, morbi mauris in.'
    
    return (
        <div className='bg-white' style={{paddingBottom:'100px', marginTop:"150px",}} >
            <div className='w-100 '>
                <h1 className='p-20 heading ' style={{marginBottom:'0px'}} >Reasons to Join US</h1>
                <h4 className=''>On a mission to Empower 1 million Girl Child by 2030</h4>
                
                <div className=''>
                    <div className=''>
                        
                    <div class="m-t-20">
                        <PictureAndText
                        img={clients}
                        h2 ='Support'
                        p={p}
                        />
                    </div>
                     <div class="m-t-20">
                         <PictureAndText
                                             img={clients1}
                                             h2 ='Tools'
                                             small={true}
                                             p={p}
                                             />
                     </div>
                     <div class="m-t-20">
                         <PictureAndText
                                             img={clients2}
                                             h2 ='Mentoring'
                                             p={p}
                                             />
                     </div>
                        
                    </div>
                </div>
            </div>
           
        </div>
    )
}
export default DashboardSection4;
