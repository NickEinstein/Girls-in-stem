import React from 'react';
import ReactDOM from 'react-dom';
import trustedBy1 from '../images/trustedBy-1.png'
import trustedBy2 from '../images/trustedBy-2.png'
import trustedBy3 from '../images/trustedBy-3.png'
import trustedBy4 from '../images/trustedBy-4.png'

const DashboardSection2 = () => {
    return (
        <div className='general-padding flex-center bg-white flex-align'>
            <div className='m-t-40  p-40'>
                <h1>We are trusted by many companies like  yours</h1>
                
                <div className='flex-align flex-center'>
                    <div className='m-t-30 flex-between w-90  align-center' >
                        <img src = {trustedBy1}/>
                        <img src = {trustedBy2}/>
                        <img src = {trustedBy3}/>
                        <img src = {trustedBy4}/>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
export default DashboardSection2;
