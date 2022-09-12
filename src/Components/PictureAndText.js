import React from 'react';
import ReactDOM from 'react-dom';

import trustedBy1 from '../images/Pam_dash.png'

// import trustedBy1 from './images/Vector.png'
// import trustedBy2 from './images/trustedBy-2.png'
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import "antd/lib/card/style/index.css";
import { Card } from 'antd';


const VectorCards = (prop) => {
    return (
        <div className='w-80 general-padding'>
 
         <div className='flex'>
            <div class="w-70 "><img className={prop.small? 'img-w-100-sm' : 'img-w-100b'} src = {prop.img}/></div>
            <div className='w-80 p-0-20 left-align'>
                <h1 className='p-20-0'>{prop.h2}</h1>
                <p className='nine-size w-65'>
                {prop.p}
                </p>
            </div>
        </div>
            
           
            
        </div>
    )
}
export default VectorCards;
