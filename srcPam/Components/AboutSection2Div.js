import React from 'react';
import ReactDOM from 'react-dom';
// import trustedBy1 from '../images/circle-girl.png'
import trustedBy2 from '../images/Rectangle 15.png'
import trustedBy3 from '../images/Rectangle 16.png'
import trustedBy4 from '../images/Rectangle 17.png'
import CircleAndStep from './CircleAndSteps'

const AboutSection2Div = (prop) => {
    return (
        <div className='general-padding '>
            <div className='m-t-40'>
                
               <div className='flex-between flex-align left-align'>
                <div class='w-30 left-align' >
                    <h1 className='strong-font-ex p-20-0 w-100'>
                    {prop.header} 
                    </h1>
                    <h1 className=''>
                    About  
                    </h1>
                    <p className='p-20-0 nine-size '>
                    {prop.text}
                    </p>
               </div>

                <div class="">
                    <div className=''>
                           <CircleAndStep width='400px' height='400px' img = {prop.img} img1 = {trustedBy3} img2 = {trustedBy2} img3 = {trustedBy4}/>
                     </div>
                </div>

                </div>
         </div>
           
         </div>
    )
}
export default AboutSection2Div;
