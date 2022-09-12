import React, { useEffect, useState } from 'react';
// import 'antd/dist/antd.css';
import "antd/lib/button/style/index.css";
import "antd/lib/input/style/index.css";

import ReactDOM from 'react-dom';
// import landing from '../images/Landing1.png'
import landing from '../images/Ellipse 70.png'
import landing1 from '../images/Ellipse 71.png'
import landing2 from '../images/Ellipse 72.png'
import landing3 from '../images/Ellipse 73.png'
import landing4 from '../images/Ellipse 74.png'
import landing5 from '../images/Ellipse 75.png'
import landing6 from '../images/Ellipse 76.png'
// import landing from '../images/Ellipse 77.png'
import landing7 from '../images/Ellipse 70.png'
// import landing2 from '../images/landing2.png'
// import landing3 from '../images/landing3.png'
// import landing4 from '../images/landing4.png'
// import landing5 from '../images/landing5.png'
import { Button } from 'antd';
import CircleComp from './CircleComp';

const CommunitySection3 = (prop) => {

    let pictures = [landing, landing2, landing3, landing4,landing5]
    let colors = ['#000051', 'white', '#000051', '#000051','#000051']
    let backgroundColors = ['white', '#370548','#D1EBFF','#BF41AB','#D7C9C9']
 
    const [timer, setTimer] = useState(0)
    const [ti, setTi] = useState(0)
    const [change, setChange] = useState(false)
    const [placeKeeper, setPlaceKeeper] = useState(0)

       return (
        <div className='general-padding ' >
            <div className=' m-t-50 ' style={{margintop:'220px'}} >
                <div className=' ' style={{height:'550px', marginBottom:'100px'}}>
                    <div className="">
                        <h1 className='strong-font-ex p-g'>{prop.head}</h1>
                            
                    </div>
                    
                   <div className='position-relative'>
                       
                       
               
                       
                       {/* <div style={{position:'absolute', right:'84%', top:'530px'}}>
                           <CircleComp small={true} img={landing}/>
                       </div>
                       <div style={{position:'absolute', right:'84%', top:'300px'}}>
                           <CircleComp small={true} img={landing2}/>
                       </div> */}

                       <div style={{position:'absolute', right:'65%', top:'100px'}}>
                           <CircleComp small={true} img={landing3}/>

                           <div class='m-t-30'>
                            <h1>{prop.name1}</h1>
                            <h1 className='bold'>{prop.occupation1}</h1>
                           </div>
                       </div>
                       <div className='flex-center' style={{margin:'0 auto', display:'flex', }}>
                           {/* <div className='p-10'>
                               <CircleComp small={true} img={landing4}/>
                           </div> */}
                           <div className='p-10'>
                               <CircleComp small={true} img={landing5}/>
                               <div class='m-t-30'>
                            <h1>{prop.name2}</h1>
                            <h1 className='bold'>{prop.occupation2}</h1>
                           </div>
                           </div>
                       </div>
                       <div style={{position:'absolute', left:'65%', top:'100px'}}>
                           <CircleComp small={true} img={landing6}/>
                           <div class='m-t-30'>
                            <h1>{prop.name3}</h1>
                            <h1 className='bold'>{prop.occupation3}</h1>
                           </div>
                       </div>
                       {/* <div style={{position:'absolute', left:'84%', top:'300px'}}>
                           <CircleComp small={true} img={landing7}/>
                       </div>
                       <div style={{position:'absolute', left:'84%', top:'530px'}}>
                           <CircleComp small={true} img={landing1}/>
                       </div> */}
                   </div>
                   

                </div>
               
            </div>
        </div>
    )
}
export default CommunitySection3;
