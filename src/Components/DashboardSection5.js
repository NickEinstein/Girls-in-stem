import React from 'react';
import ReactDOM from 'react-dom';
import Section5Cards from './Section5Cards';
import trustedBy1 from '../images/Popular1.png'
import trustedBy2 from '../images/Rectangle 7.png'
// import trustedBy2 from './images/trustedBy-2.png'
import trustedBy3 from '../images/Popular2.png'
import trustedBy4 from '../images/Popular3.png'

const DashboardSection5 = () => {
    return (
        <div className='m-t-50 m-b-50' >
            <div>
                <h1 style={{marginTop:'150px',}}>Most Popular Services?</h1>
                
                <div className='flex-between p-20'>
                    <Section5Cards type ='Web Design' images ={trustedBy1}/>
                    <Section5Cards type ='Mobile Development' images ={trustedBy2}/>
                    <Section5Cards type ='Accounting' images ={trustedBy3}/>
                    <Section5Cards type ='Data Entry' images ={trustedBy4}/>
                   
                    
                </div>
            </div>
           
        </div>
    )
}
export default DashboardSection5;
