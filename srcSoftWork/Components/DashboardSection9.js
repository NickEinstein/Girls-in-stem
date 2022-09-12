import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import clients from '../images/Ceo Message.png'
import clients2 from '../images/Polygon 1.png'
import clients3 from '../images/Ellipse 6.png'

const DashboardSection9 = () => {
    return (
        <div className='general-padding left-align' style={{backgroundColor:"#FAFAFA", }} >
            <div class="m-t-40 m-b-20 flex-between ">
                <div className='left-align w-50 '>
                    <h1 style={{fontWeight:'bolder', fontSize:"43px"}}>A message from 
the CEO</h1>
                        {/* <h2 className='m-b-20'>Do what you love the most and earn while at it</h2> */}

                        
<p>The normal has become abnormal</p>
<p>Join the best community, find opportunities,find talents.</p>
                
                    <div className='m-t-50'>
                    <Button className='bold' style={{padding:'0px', borderRadius:'20px', minWidth:'120px', height:'35px', fontFamily: 'Merriweather serif',fontWeight:'bold', fontSize:'18px',backgroundColor:'#5B0877', color:'white' }}>Play Video</Button>
                        {/* <Button className='bold' style={{height:'60px'}}>Find Talent</Button> */}
                    </div>
                </div>
                <div className='w-50  flex m-b-50'>
                    <div className='div-background flex position-relative' style={{ alignSelf:'center', textAlign:'right', marginLeft:'auto',  }}>
                        <img style={{width:'400px'}} src = {clients}/>
                        <img className='position-absolute2' style={{width:'50px'}} src = {clients2}/>
                <img className='position-absolute3' style={{width:'100px'}} src = {clients3}/>

                </div>

                </div>
                        </div>
            </div>
    )
}
export default DashboardSection9;
