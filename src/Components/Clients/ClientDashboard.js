import React, { useEffect, useState } from 'react';
// import  {React, useEffect,ueState} from 'react';
import ReactDOM from 'react-dom';
import ClientDashboardSec1 from './ClientDashboardSec1';
import ClientDashboardSec2 from './ClientDashboardSec2';
import ClientDashboardSec3 from './ClientDashboardSec3';
import ClientDashboardSec4 from './ClientDashboardSec4';
import ClientDashboardSec5 from './ClientDashboardSec5';
// import ClientDashboardSec6 from './ClientDashboardSec6';
// import ClientDashboardSec7 from './ClientDashboardSec7';
// import ClientDashboardSec9 from './ClientDashboardSec9';
// import Footer from './Footer';
import NavBar from '../NavBar';

import landing from '../../images/Landing1.png'
import ClientNavBar from './ClientNavBar';
// import landing2 from '../images/landing2.png'
// import landing3 from '../images/landing3.png'
// import landing4 from '../images/landing4.png'
// import landing5 from '../images/landing5.png'
// import { useEffect, useState } from 'react';
// import landing from '../../images/Landing1.png'
import landingz from '../../images/logo-Softwork.png'
import landing2 from '../../images/landing2.png'
import landing3 from '../../images/landing3.png'
import landing4 from '../../images/landing4.png'
import trustedBy2 from '../../images/Vector (5).png'
const Dashboard = (prop)=>{
    

    return(
        <div className='w-100 bg-white' >
           <div className='relative'  >
           <div className='general-padding absolute border2b w-100 ' style={{top:'0px', padding:"0% 7%"}} >
                    <div className='flex-between p-20-0 '>
                    <img style={{height:"35px"}} src = {landingz}/>
                    <img style={{height:"35px"}} src = {trustedBy2}/>
                    {/* <h2>Hi</h2> */}

                    </div>
                    {/* <img style={{height:"635px"}} src = {pictures[placeKeeper]}/> */}
            
        </div>
               {/* <ClientNavBar history ={prop.history}/> */}
            </div>
             <ClientDashboardSec1 />

               <div class="m-t-"><ClientDashboardSec2/></div>
                <ClientDashboardSec3 redirect = {prop}/>

                
            
               
               {/* <Footer/> */}
           
        </div>
    )
}
export default Dashboard;
