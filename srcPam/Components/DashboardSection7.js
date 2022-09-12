import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Section5Cards from './Section5Cards';
import landing from '../images/Pam_dash.png'
import landing2 from '../images/red 6 1.png'
import landing3 from '../images/landing3.png'
import landing4 from '../images/landing4.png'
import landing5 from '../images/landing5.png'
import { Button } from 'antd';


const DashboardSection7 = () => {
    let pictures = [landing, landing2, landing3, landing4,landing5]
    const [placeKeeper, setPlaceKeeper] = useState(0)


    return (
        <div className='general-padding-ex' >
            <div className='section1 p-50-0 flex-between flex-align' >
                <div className='w-70 m-t-120' >
                   
                        <h1 className='heading-big p-g w-80'>Your dreams are valid </h1>
                            
                    
                    <h1>
                    A Girl child can be all powerful in:
                    </h1>
                    <p className='pre-jjk'>
                <span className='jjk'>S</span>cience.<span className='jjk'>T</span>echnology.<span className='jjk'>E</span>ngineering and<span className='jjk'> M</span>athematics
                    </p>
                    <div className='w-50 flex-between' style={{margin:'60px 0'}}>
                        <Button className='buttons-big'>Join Us</Button>
                        {/* <Button className='.buttons' style={{borderRadius:'10px', height:'42px', width:"110px", backgroundColor:'transparent',borderColor:colors[placeKeeper], color:colors[placeKeeper]}}>Post JOB</Button> */}
                        {/* <Button className='.buttons'>Post JOB</Button> */}
                    </div>
                </div>
                {/* <div className='border' > */}
                    <img className='w-30' style={{height:''}} src={landing2}/>
                {/* </div> */}
            </div>
        </div>
    )
}
export default DashboardSection7;
