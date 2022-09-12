import React, { useEffect, useState } from 'react';
// import 'antd/dist/antd.css';
import "antd/lib/button/style/index.css";
import "antd/lib/input/style/index.css";

import ReactDOM from 'react-dom';
import landing from '../../images/Landing1.png'
import landingz from '../../images/logo-Softwork.png'
import landing2 from '../../images/landing2.png'
import landing3 from '../../images/landing3.png'
import landing4 from '../../images/landing4.png'
import landing5 from '../../images/Frame 40.png'
import { Button } from 'antd';

const DashboardSection1 = () => {

    let pictures = [landing, landing2, landing3, landing4]
    let colors = ['#000051', 'white', '#000051', '#000051','#000051']
    let backgroundColors = ['white', '#370548','#D1EBFF','#BF41AB','#D7C9C9']
 
    const [timer, setTimer] = useState(0)
    const [ti, setTi] = useState(0)
    const [change, setChange] = useState(false)
    const [placeKeeper, setPlaceKeeper] = useState(0)

    const checkTi = ()=>{
        // console.log(timer%5)
         timer % 4 === 0 &&
         setPlaceKeeper(placeKeeper+1)
       
    }

    useEffect(()=>{
checkTi()

    },[timer])

    useEffect(()=>{
        console.log(placeKeeper)
if(placeKeeper>4){
    setPlaceKeeper(0)

}
// else
// picture = pictures[placeKeeper]
        
            },[placeKeeper])

    setInterval(()=>{
setTimer(Math.floor((new Date/1000)))
    }, 1000

    )

    return (
        <div className='' >
                    {/* <div className='flex-between'>
                    <img style={{height:"35px"}} src = {landingz}/>
                    <h2>Hi</h2>

                    </div> */}
                    <img style={{height:"650px", width:'100%'}} src = {landing5}/>
            
        </div>
    )
}
export default DashboardSection1;
