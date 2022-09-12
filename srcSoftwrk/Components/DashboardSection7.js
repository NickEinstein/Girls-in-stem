import React from 'react';
import ReactDOM from 'react-dom';
import Section5Cards from './Section5Cards';
import Section7Cards from './Section7cards';
import trustedBy1 from '../images/View Project 1.png'
import trustedBy2 from '../images/View Project 2.png'
import trustedBy3 from '../images/View Project 3.png'
import trustedBy4 from '../images/View Project 4.png'

const DashboardSection7 = () => {
    return (
        <div className='' style={{margin:'150px 0', backgroundColor:"#FAFAFA", padding:'40px 0px'}}>
            <div>
                <h1>View projects made by our Freelancers</h1>
                
                <div className='flex-between p-20'>
                    <Section7Cards images={trustedBy1}/>
                    <Section7Cards images={trustedBy2}/>
                    <Section7Cards images={trustedBy3}/>
                    <Section7Cards images={trustedBy4}/>
                    
                    
                </div>
            </div>
           
        </div>
    )
}
export default DashboardSection7;
