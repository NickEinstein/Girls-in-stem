import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import clients from '../images/clients.png'

const DashboardSection3 = () => {
    return (
        <div className='general-padding left-align' style={{backgroundColor:"#FAFAFA", }} >
            <div class="m-t-40 m-b-20 flex-between ">
                <div className='left-align w-50 '>
                    <h1 style={{fontWeight:'bolder', fontSize:"43px"}}>Clients</h1>
                        <h2 className='m-b-20'>Find Amazing Talents</h2>
                        <p>
                        Finding the best talent is that easy.
                        <p></p></p>
                                        <p>Work with the largest network of trustwoorthy </p>
                                        <p>professionals and get things done.</p>
                
                    <div className='m-t-50'>
                    <Button className='bold' style={{padding:'0px', borderRadius:'20px', minWidth:'170px', height:'45px', fontFamily: 'Merriweather serif',fontWeight:'bold', fontSize:'24px' }}>Find Talent</Button>
                        {/* <Button className='bold' style={{height:'60px'}}>Find Talent</Button> */}
                    </div>
                </div>
                <div className='w-50  flex m-b-50'>
                    <div className='div-background flex' style={{ alignSelf:'center', textAlign:'right', marginLeft:'auto',  }}><img style={{width:'400px'}} src = {clients}/></div>
                </div>
                        </div>
            </div>
    )
}
export default DashboardSection3;
