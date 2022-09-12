import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import clients from '../images/Freelancer.png'
import clients1 from '../images/Ellipse 67.png'
import clients3 from '../images/Ellipse 68.png'
import clients2 from '../images/Ellipse 69.png'
import arrow1 from '../images/Arrow 1.png'
import arrow2 from '../images/Arrow 2.png'
import arrow3 from '../images/Arrow 3.png'
import CircleComp from './CircleComp'

const CommunitySection1 = () => {
    return (
        <div className='general-padding' style={{backgroundColor:"#FAFAFA", height:'900px'  }} >
                <div className=' align-center'>
                    <h1 className='strong-font-ex' style={{fontWeight:'bolder', fontSize:"43px", marginTop:'190px', marginBottom:'60px', fontSize:'70px'}}>Discussion</h1>
                        {/* <h2 className='m-b-20'>See what we have been up to</h2> */}
                      

                        <div className='position-relative m-l-70'>
                             <div style={{position:'absolute', top:'0px', left:'30%'}}>
                                <CircleComp width='200px' height='200px' img={clients1}/>
                                <img className='h50' src={arrow1}/>
                                <p className='p-10-0'>Sustainabilty in Oil and Gas</p>
                            </div>                
                             <div style={{position:'absolute', top:'200px', left:'0%'}}>
                                <CircleComp width='200px' height='200px' img={clients2}/>
                                <img className='h50' src={arrow2}/>
                                <p className='p-10-0'>Career Path in Project Management</p>


                            </div>                
                             <div style={{position:'absolute', top:'200px', left:'60%'}}>
                                <CircleComp width='200px' height='200px' img={clients3}/>
                                <img className='h50' src={arrow3}/>
                                <p className='p-10-0'> How to Transition to Tech</p>


                            </div>                
          

                        </div>
          
                </div>
                
                {/* <div className='w-50  flex'>
                    <div className='div-background flex' style={{ alignSelf:'center', textAlign:'right', marginLeft:'auto',  }}><img style={{width:'400px'}} src = {clients}/></div>
                </div> */}
            </div>
    )
}
export default CommunitySection1;
