import React from 'react';
import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
// import trustedBy2 from './images/trustedBy-2.png'
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import "antd/lib/card/style/index.css";
import { Card } from 'antd';


const VectorCards = (prop) => {
    return (
        <div >
 
            {/* <div className='border2 p-20' style={{width:"180px", height:"100px", fontSize:'14px'}}> */}
            <Card
    hoverable
    style={{ width: 220, height:150,boxShadow: '3.99099px 3.99099px 1.33033px rgba(0, 0, 0, 0.3)', borderRadius:"13.3033px" }}
    // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
     {prop.image}
                <p>{prop.text}</p>
  </Card>
            {/* <img src = {trustedBy2}/> */}
           
            </div>
        // </div>
    )
}
export default VectorCards;
