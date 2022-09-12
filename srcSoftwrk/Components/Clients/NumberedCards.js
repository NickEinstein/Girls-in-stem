import React from 'react';
import ReactDOM from 'react-dom';
import Section7Cards from '../Section7cards';
import trustedBy1 from '../../images/Ellipse 11.png'
import trustedBy2 from '../../images/trustedBy-2.png'
import trustedBy3 from '../../images/trustedBy-3.png'
import trustedBy4 from '../../images/trustedBy-4.png'

const NumberedCards = () => {
    return (
        <div className='  flex-center bg-white flex-align ' style={{width:"24%"}}>
            <div >
                <div className='position-relative' >
                    <img src = {trustedBy1}/>
                    {/* <p className='absolute large-font c-white' style={{color:'red',}}>1</p> */}
                </div>
                <div className="m-t-40">
                    <p>Put a face to your name!</p>
                    <p>Upload a profile picture that clearly</p>
                    <p>shows your face</p>
                </div>
            </div>
           
        </div>
    )
}
export default NumberedCards;
