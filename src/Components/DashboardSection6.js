import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import clients from '../images/Freelancer.png'

const DashboardSection6 = () => {
    return (
        <div className='general-padding left-align' style={{backgroundColor:"#FAFAFA",  }} >
            <div class="m-t-40 m-b-20 flex-between " style={{padding:'80px 0'}}>
                <div className='left-align w-50 '>
                    <h1 style={{fontWeight:'bolder', fontSize:"43px"}}>Freelancer</h1>
                        <h2 className='m-b-20'>Do what you love the most and earn while at it</h2>
                        <p>
                        Experience the fulfilment that comes with 

                        </p>
                                        <p>meeting needs while doing what you love.</p>
                
                    <div className='m-t-50'>
                    <Button className='bold' style={{
                        padding:'0px', borderRadius:'20px', minWidth:'120px', 
                        height:'35px', fontFamily: 'Merriweather serif',fontWeight:'bold',
                         fontSize:'18px', backgroundColor:'#5B0877', color:'white'
                         }}>
                             Find Job
                    </Button>
                        {/* <Button className='bold' style={{height:'60px'}}>Find Talent</Button> */}
                    </div>
                </div>
                <div className='w-50  flex'>
                    <div className='div-background flex' style={{ alignSelf:'center', textAlign:'right', marginLeft:'auto',  }}><img style={{width:'400px'}} src = {clients}/></div>
                </div>
                        </div>
            </div>
    )
}
export default DashboardSection6;
