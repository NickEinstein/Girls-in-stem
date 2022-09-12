import React, { useEffect, useState } from 'react';
// import 'antd/dist/antd.css';
import "antd/lib/button/style/index.css";
import "antd/lib/input/style/index.css";

import ReactDOM from 'react-dom';
import landing from '../images/Landing1.png'
import landing2 from '../images/landing2.png'
import landing3 from '../images/landing3.png'
import landing4 from '../images/landing4.png'
import landing5 from '../images/landing5.png'
import { Button } from 'antd';

const DashboardSection1 = () => {

    let pictures = [landing, landing2, landing3, landing4,landing5]
    let colors = ['#000051', 'white', '#000051', '#000051','#000051']
    let backgroundColors = ['white', '#370548','#D1EBFF','#BF41AB','#D7C9C9']
 
    const [timer, setTimer] = useState(0)
    const [ti, setTi] = useState(0)
    const [change, setChange] = useState(false)
    const [placeKeeper, setPlaceKeeper] = useState(0)

    const checkTi = ()=>{
        // console.log(timer%5)
         timer % 5 === 0 &&
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
        <div className='general-padding ' style={{backgroundColor:backgroundColors[placeKeeper], color:colors[placeKeeper]}}>
            <div className='section1 'style={{backgroundColor:backgroundColors[placeKeeper], color:colors[placeKeeper]}} >
                <div className='w-50 ' style={{height:'500px'}}>
                    <h1 style={{color:colors[placeKeeper]}}>Hire the best Freelancer</h1>
                        <h1 style={{color:colors[placeKeeper]}}>for your business</h1>
                    <p>
                        Everything can be that easy!
                    </p>
                    <p>
                        Join a community that works. Find great Talents
                    </p>
                    <div className='w-50 flex-between' style={{marginTop:'110px'}}>
                        <Button className='.buttons' style={{borderRadius:'10px', height:'42px', width:"110px", backgroundColor:'#5B0877', color:"white", borderColor:colors[placeKeeper]}}>Find JOB</Button>
                        <Button className='.buttons' style={{borderRadius:'10px', height:'42px', width:"110px", backgroundColor:'transparent',borderColor:colors[placeKeeper], color:colors[placeKeeper]}}>Post JOB</Button>
                        {/* <Button className='.buttons'>Post JOB</Button> */}
                    </div>
                </div>
                <div className={placeKeeper===2?'picture-place2':'picture-place'}>
                    <img style={{height:placeKeeper===2?'520px':"535px"}} src = {pictures[placeKeeper]}/>
                </div>
            </div>
        </div>
    )
}
export default DashboardSection1;
