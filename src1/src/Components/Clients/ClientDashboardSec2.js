import React from 'react';
import ReactDOM from 'react-dom';
import Section7Cards from '../Section7cards';
import trustedBy1 from '../../images/trustedBy-1.png'
import trustedBy2 from '../../images/trustedBy-2.png'
import trustedBy3 from '../../images/trustedBy-3.png'
import trustedBy4 from '../../images/Frame 41 (3).png'

const DashboardSection2 = () => {
    return (
        <div className='general-padding  flex-center bg-white flex-align'>
            <div className='m-t-40 w-100  p-40'>
                <h1 className='large-font  w-100'>See how our freelancers are doing</h1>
                
                <div className='flex-align flex-center  w-100'>
                    <div className='m-t-30  align-center w-100' >
                        <div className="flex-between w-100">
                            <img className="w-30" src={trustedBy4}/>
                            <img className="w-30" src={trustedBy4}/>
                            <img className="w-30" src={trustedBy4}/>
                           
                        </div>
                        <div className="flex-between w-100 m-t-30">
                            <img className="w-30" src={trustedBy4}/>
                            <img className="w-30" src={trustedBy4}/>
                            <img className="w-30" src={trustedBy4}/>
                            {/* <div class="w-30"><img src={trustedBy4}/></div>
                            <div class="w-30"><img src={trustedBy4}/></div> */}
                            {/* <Section7Cards images= {trustedBy1}/>
                            <Section7Cards images= {trustedBy2}/>
                            <Section7Cards images= {trustedBy3}/> */}
                        </div>                      
                    </div>
                </div>
            </div>
           
        </div>
    )
}
export default DashboardSection2;
