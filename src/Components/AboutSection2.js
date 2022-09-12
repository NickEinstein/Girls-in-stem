import React from 'react';
import ReactDOM from 'react-dom';
// import trustedBy1 from '../images/circle-girl.png'
import AboutSection2Div from './AboutSection2Div';
import CircleAndStep from './CircleAndSteps'
import trustedBy1 from '../images/Ellipse 49 (1).png'
import trustedBy2 from '../images/Ellipse 49 (2).png'

const DashboardSection2 = () => {

    let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Fringilla vulputate cras tellus non ipsum amet, tincidunt. 
    Varius integer sit sagittis rhoncus eu et volutpat consectetur.
     A, massa ac, erat donec at id nisl, tellus. In mattis velit mauris,
      nisl semper. Laoreet nunc eros amet habitant dolor, habitasse id volutpat. 
      Id egestas urna purus enim massa id ultricies etiam. Enim, tellus quis urna tempor aliquam eu fermentum, 
    mi. Nam sapien dolor, sem diam enim pellentesque ac. Neque id ut id montes, morbi mauris in.`

    return (
        <div className='general-padding ' style={{height:'2400px'}}>
           <AboutSection2Div img={trustedBy1} text = {text} header ='Founder'/>
           <AboutSection2Div img={trustedBy2} text = {text} header ='Co Founder'/>
           <AboutSection2Div img={trustedBy2} text = {text} header ='Co Founder'/>
           <AboutSection2Div img={trustedBy2} text = {text} header ='Co Founder'/>
           
         </div>
    )
}
export default DashboardSection2;
