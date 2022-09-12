import React, { useEffect, useState } from 'react';
// import  {React, useEffect,ueState} from 'react';
import ReactDOM from 'react-dom';
import DashboardSection1 from './DashboardSection1';
import DashboardSection2 from './DashboardSection2';
import DashboardSection3 from './DashboardSection3';
import DashboardSection4 from './DashboardSection4';
import DashboardSection5 from './DashboardSection5';
import DashboardSection6 from './DashboardSection6';
import DashboardSection7 from './DashboardSection7';
import DashboardSection9 from './DashboardSection9';
import Footer from './Footer';
import NavBar from './NavBar';

import landing from '../images/Pam_dash.png'
import landing2 from '../images/landing2.png'
import landing3 from '../images/landing3.png'
import landing4 from '../images/landing4.png'
import landing5 from '../images/landing5.png'
import NavBarr from './NavBarr';
import AboutSection3 from './AboutSection3';
// import { useEffect, useState } from 'react';

const Dashboard = (prop)=>{
    // console.log(prop)
    let pictures = [landing, landing2, landing3, landing4,landing5]
    let colors = ['#000051', 'white', '#000051', '#000051','#000051']
    let backgroundColors = ['white', '#370548','#D1EBFF','#BF41AB','#D7C9C9']
 
    const [timer, setTimer] = useState(0)
    const [ti, setTi] = useState(0)
    const [change, setChange] = useState(false)
    const [placeKeeper, setPlaceKeeper] = useState(0)

    // const checkTi = ()=>{
    //     // console.log(timer%5)
    //      timer % 5 === 0 &&
    //      setPlaceKeeper(placeKeeper+1)
       
    // }

//     useEffect(()=>{
// checkTi()

//     },[timer])

//     useEffect(()=>{
//         console.log(placeKeeper)
// if(placeKeeper>4){
//     setPlaceKeeper(0)

// }
// else
// picture = pictures[placeKeeper]
        
            // },[placeKeeper])

//     setInterval(()=>{
// setTimer(Math.floor((new Date/1000)))
//     }, 1000

//     )

    return(
        <div className='w-100 bg-white' >
           <div style={{backgroundColor:backgroundColors[placeKeeper]}}>
               {/* <NavBar history ={prop.history} backgroundColor={colors[placeKeeper]}/> */}
               <NavBarr history ={prop.history} backgroundColor={colors[placeKeeper]}/>
               <DashboardSection1 />
            </div>
               <DashboardSection2/>
               <div className='' style={{marginTop:'170px'}}>
                <DashboardSection3/>
                </div>
               <DashboardSection4/>
               
               <DashboardSection5/>
               <DashboardSection6/>
               <DashboardSection7/>
               {/* <DashboardSection9/> */}
               <Footer/>
           
        </div>
    )
}
export default Dashboard;
