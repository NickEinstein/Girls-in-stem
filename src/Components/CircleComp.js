import React from 'react';
import ReactDOM from 'react-dom';

import trustedBy1 from '../images/Pam_dash.png'

// import trustedBy1 from './images/Vector.png'
// import trustedBy2 from './images/trustedBy-2.png'
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import "antd/lib/card/style/index.css";
import { Card } from 'antd';


const CircleComp = (prop) => {
    return (
        <div className='w-80'>
 
         <div className=''>
            <div class="w-70  "><img className={prop.small? 'img-w-100-sm round-border ' : 'img-w-100b round-border '} src = {prop.img}/></div>
            {/* <div className='w-80 p-0-20 left-align'>
                <h2>{prop.h2}</h2>
                <p>
                {prop.p}
                </p>
            </div> */}
        </div>
            
           
            
        </div>
    )
}
export default CircleComp;
