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
        <div className='w-80 general-padding '>
 
         <div className='p-20' style={{width:prop.width, height:prop.height, backgroundColor:prop.color}}>
            
<h2 className='left-align' style={{marginTop: prop.three && '200px',}}>{prop.h2}</h2>
<p className='nine-size w-50'>{prop.p}</p>

        </div>
            
           
            
        </div>
    )
}
export default VectorCards;
