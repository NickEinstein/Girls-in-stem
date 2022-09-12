import React, { useEffect, useState } from 'react';
// import  {React, useEffect,ueState} from 'react';

// import Footer from './Footer';
import ProfileNav from './ProfileNav';
import ProfileSidebar from './ProfileSidebar';
import MainPage from './MainPage';

// import landing from '../images/Landing1.png'
// import landing2 from '../images/landing2.png'
// import landing3 from '../images/landing3.png'
// import landing4 from '../images/landing4.png'
// import landing5 from '../images/landing5.png'
// import { useEffect, useState } from 'react';

const Dashboard = (prop)=>{
    // console.log(prop)
    // let pictures = [landing, landing2, landing3, landing4,landing5]
    let colors = ['#000051', 'white', '#000051', '#000051','#000051']
    let backgroundColors = ['white', '#370548','#D1EBFF','#BF41AB','#D7C9C9']
 
    const [timer, setTimer] = useState(0)
    const [ti, setTi] = useState(0)
    const [change, setChange] = useState(false)
    const [placeKeeper, setPlaceKeeper] = useState(0)

    
    return(
        <div className='w-100 ' style={{backgroundColor:'#FAFAFA'}} >
           <div className='border2'>
               <ProfileNav history ={prop.history} />
            </div>
            <div className='flex-between p-20 ' style={{margin:'1% 4%'}}>
                <div class="bg-white w-30 m-r-20 " style={{borderRadius:'20px'}}><ProfileSidebar/></div>
                <div class="bg-white w-70 " style={{borderRadius:'20px'}}><MainPage/></div>
                
            </div>
               
           
        </div>
    )
}
export default Dashboard;
