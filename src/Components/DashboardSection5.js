import React from 'react';
import ReactDOM from 'react-dom';
import BoxesWColors from './BoxesWColors'
import { Button } from 'antd';
import clients from '../images/Ellipse 49.png'
import clients1 from '../images/Rectangle 15.png'
import clients2 from '../images/Rectangle 16.png'
import clients3 from '../images/Rectangle 17.png'

const AboutSection3 = () => {
    let p = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla vulputate cras tellus non ipsum amet, tincidunt. Varius integer sit sagittis rhoncus eu et volutpat consectetur. A, massa ac, erat donec at id nisl, tellus. In mattis velit mauris, nisl semper. Laoreet nunc eros amet habitant dolor, habitasse id volutpat. Id egestas urna purus enim massa id ultricies etiam. Enim, tellus quis urna tempor aliquam eu fermentum, mi. Nam sapien dolor, sem diam enim pellentesque ac. Neque id ut id montes, morbi mauris in.'

    return (
        <div className='general-padding position-relative' style={{marginBottom:'700px', marginTop:"400px"}}>
            <h1 style={{position:'absolute', bottom:'200px', left:''}} className='heading left-align'>Our Programs</h1>
        <div className=' zz2' style={{position:'absolute', top:'-300px', left:'34%'}} >
            <BoxesWColors 
            p={p}
            h2='Mentoring'
            height='500px'
            width='500px'
            color='#FF97B7'
            />
        </div>

        <div className='zz' style={{position:'absolute', top:'30px', left:'15%'}} >
            <BoxesWColors 
            p={p}
            h2='Mentoring'
            height='500px'
            width='500px'
            color='#F368D9'
            />
        </div>

        <div className='zz1' style={{position:'absolute', top:'30px', left:'53%'}} >
            <BoxesWColors 
            p={p}
            h2='Mentoring'
            height='500px'
            width='500px'
            color='#FF5D8F'
            three = {true}
            />
        </div>

        
        
        
       
        
    </div>
    )
}
export default AboutSection3;



