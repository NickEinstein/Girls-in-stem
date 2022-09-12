import React from 'react';
import ReactDOM from 'react-dom';
import trustedBy1 from '../images/Ellipse 49 (1).png'
import trustedBy2 from '../images/Rectangle 15.png'
import trustedBy3 from '../images/Rectangle 16.png'
import trustedBy4 from '../images/Rectangle 17.png'

const DashboardSection2 = (prop) => {
    return (
        <div className='general-padding' >
                
            <div className='w-50  flex m-b-50 position-relative'>
                    <img className='img-w-100b zz' style={{width:prop.width, height:prop.height}} src = {prop.img}/>
                {/* <div className='' >
                    <img className='boxes ' src = {prop.img1} style={{position:'absolute', top:'-110px', left:'11%'}}/>
                    <img className='boxes ' src = {prop.img2} style={{position:'absolute', top:'-27px', left:'31%'}}/>
                    <img className='boxes ' src = {prop.img3} style={{position:'absolute', top:'50px', left:'53%'}}/>
                </div> */}
            </div>

        </div>
           
    )
}
export default DashboardSection2;
