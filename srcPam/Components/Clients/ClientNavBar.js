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
import trustedBy2 from '../../images/Vector (5).png'

// import landing5 from '../images/landing5.png'
import { Button } from 'antd';

const ClientNavBar = () => {

    let pictures = [landing, landing2, landing3, landing4]
    let colors = ['#000051', 'white', '#000051', '#000051','#000051']
    let backgroundColors = ['white', '#370548','#D1EBFF','#BF41AB','#D7C9C9']

    return (
        <div className='general-padding border2b w-100 ' style={{top:'0px'}} >
                    <div className='flex-between p-20-0 '>
                    <img style={{height:"35px"}} src = {landingz}/>
                    <img style={{height:"35px"}} src = {trustedBy2}/>
                    {/* <h2>Hi</h2> */}

                    </div>
                    {/* <img style={{height:"635px"}} src = {pictures[placeKeeper]}/> */}
            
        </div>
    )
}
export default ClientNavBar;
