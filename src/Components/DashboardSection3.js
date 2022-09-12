import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import clients from '../images/Ellipse 49.png'
import clients1 from '../images/Rectangle 15.png'
import clients2 from '../images/Rectangle 16.png'
import clients3 from '../images/Rectangle 17.png'

const DashboardSection3 = () => {
    return (
        <div className='general-padding left-align' >
            <div class="m-t-40 m-b-20 flex-between ">
                <div className='left-align w-50 '>
                    <h1 className='w-80' style={{fontWeight:'bolder', fontSize:"43px"}}>A Place Where your Dream can be Driven</h1>
                        {/* <h2 className='m-b-20 w-80'>A Place Where your Dream can be Driven</h2> */}
                        <p className='w-70 nine-size'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla vulputate
                                    cras tellus non ipsum amet, tincidunt. Varius integer sit sagittis
                                    rhoncus eu et volutpat consectetur. A, massa ac, erat donec at id nisl,
                                    tellus. In mattis velit mauris, nisl semper. Laoreet nunc eros amet habitant dolor,
                                     habitasse id volutpat. Id egestas urna purus enim massa id ultricies etiam. Enim,
                                     tellus quis urna tempor aliquam eu fermentum,
                                    mi. Nam sapien dolor, sem diam enim pellentesque ac. Neque id ut id montes, morbi mauris in.
                        </p>
                
                    <div className='m-t-50'>
                    <Button className='buttons-big' >Join Us</Button>
                        {/* <Button className='bold' style={{height:'60px'}}>Find Talent</Button> */}
                    </div>
                </div>
                <div className='w-50 flex push-right m-b-50 position-relative'>
                    <img className='img-w-350 zz' src = {clients}/>
                    <div>
                    {/* <img className='boxes box1' src = {clients3}/> */}
                    {/* <img className='boxes box2' src = {clients2}/> */}
                    {/* <img className='boxes box3' src = {clients1}/> */}
                    
                   

                    </div>
                </div>
                        </div>
            </div>
    )
}
export default DashboardSection3;
