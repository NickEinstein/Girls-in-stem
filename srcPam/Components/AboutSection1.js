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

const DashboardSection1 = () => {

    let pictures = [landing, landing2, landing3, landing4,landing5]
    let colors = ['#000051', 'white', '#000051', '#000051','#000051']
    let backgroundColors = ['white', '#370548','#D1EBFF','#BF41AB','#D7C9C9']
 
    const [timer, setTimer] = useState(0)
    const [ti, setTi] = useState(0)
    const [change, setChange] = useState(false)
    const [placeKeeper, setPlaceKeeper] = useState(0)

//     const checkTi = ()=>{
//         // console.log(timer%5)
//          timer % 5 === 0 &&
//          setPlaceKeeper(placeKeeper+1)
       
//     }

//     useEffect(()=>{
// checkTi()

//     },[timer])

//     useEffect(()=>{
//         console.log(placeKeeper)
// if(placeKeeper>4){
//     setPlaceKeeper(0)

// }
// // else
// // picture = pictures[placeKeeper]
        
//             },[placeKeeper])

//     setInterval(()=>{
// setTimer(Math.floor((new Date/1000)))
//     }, 1000

//     )

    return (
        <div className='general-padding ' >
            <div className='  ' >
                <div className=' m-t-120' style={{height:'1300px'}}>
                    <div className="">
                        <h1 className='strong-font-ex p-g'>NIGERIAN GIRL<span className='cl'> IN STEM</span> </h1>
                            
                    </div>
                    
                   <div className='position-relative'>
                       
                       
                <div className='left-align' style={{position:'absolute', top:'270px', left:'26%', width:"50%"}}>
                    <h1 className='p-20 align-center' style={{fontWeight:'900'}}>The power in togertherness</h1>
                    <p className='p-20 align-center'>How we started</p>
                    <p className='p-20'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Fringilla vulputate cras tellus non ipsum amet, tincidunt. 
                    Varius integer sit sagittis rhoncus eu et volutpat consectetur.
                     A, massa ac, erat donec at id nisl, tellus. In mattis velit mauris,
                      nisl semper. Laoreet nunc eros amet habitant dolor, habitasse id volutpat. 
                      Id egestas urna purus enim massa id ultricies etiam. Enim, tellus quis urna tempor aliquam eu fermentum, 
                    mi. Nam sapien dolor, sem diam enim pellentesque ac. Neque id ut id montes, morbi mauris in.
                    </p>
                    <p className='p-20'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Fringilla vulputate cras tellus non ipsum amet, tincidunt. 
                    Varius integer sit sagittis rhoncus eu et volutpat consectetur.
                     A, massa ac, erat donec at id nisl, tellus. In mattis velit mauris,
                      nisl semper. Laoreet nunc eros amet habitant dolor, habitasse id volutpat. 
                      Id egestas urna purus enim massa id ultricies etiam. Enim, tellus quis urna tempor aliquam eu fermentum, 
                    mi. Nam sapien dolor, sem diam enim pellentesque ac. Neque id ut id montes, morbi mauris in.
                    </p>
                    <p className='p-20'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Fringilla vulputate cras tellus non ipsum amet, tincidunt. 
                    Varius integer sit sagittis rhoncus eu et volutpat consectetur.
                     A, massa ac, erat donec at id nisl, tellus. In mattis velit mauris,
                      nisl semper. Laoreet nunc eros amet habitant dolor, habitasse id volutpat. 
                      Id egestas urna purus enim massa id ultricies etiam. Enim, tellus quis urna tempor aliquam eu fermentum, 
                    mi. Nam sapien dolor, sem diam enim pellentesque ac. Neque id ut id montes, morbi mauris in.
                    </p>
                </div>
                       
                       <div style={{position:'absolute', right:'84%', top:'530px'}}>
                           <CircleComp small={true} img={landing}/>
                       </div>
                       <div style={{position:'absolute', right:'84%', top:'300px'}}>
                           <CircleComp small={true} img={landing2}/>
                       </div>

                       <div style={{position:'absolute', right:'70%', top:'100px'}}>
                           <CircleComp small={true} img={landing3}/>
                       </div>
                       <div className='flex-center' style={{margin:'0 auto', display:'flex', }}>
                           <div className='p-10'>
                               <CircleComp small={true} img={landing4}/>
                           </div>
                           <div className='p-10'>
                               <CircleComp small={true} img={landing5}/>
                           </div>
                       </div>
                       <div style={{position:'absolute', left:'70%', top:'100px'}}>
                           <CircleComp small={true} img={landing6}/>
                       </div>
                       <div style={{position:'absolute', left:'84%', top:'300px'}}>
                           <CircleComp small={true} img={landing7}/>
                       </div>
                       <div style={{position:'absolute', left:'84%', top:'530px'}}>
                           <CircleComp small={true} img={landing1}/>
                       </div>
                   </div>
                   

                </div>
               
            </div>
        </div>
    )
}
export default DashboardSection1;
