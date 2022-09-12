import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../../images/landing4.png'
import bro from '../../images/landing4.png'
import clients from '../../images/Ceo Message.png'
import clients2 from '../../images/Polygon 1.png'
import clients3 from '../../images/Ellipse 6.png'

import { BiEdit, BiEditAlt } from 'react-icons/bi';
import { MdAddLocationAlt } from 'react-icons/md';
import { Button, Input, Progress } from 'antd';

const ProfileNav = (prop)=>{
        const { history } = prop;
        // console.log(prop)

    const signUp = ()=>{

        history.push('/sign-up');
    }
    return(
        <div className='w-100 p-20 ' style={{ color:'#000051'}}>
            <nav className=' ' >
                
                <div className='p-10 '>
                <img src = {logo} style={{width:"85px"}}/>
                <h2 className='m-t-'>Raymond Sky</h2>
                <p className='m-t-1'>Product Manager</p>
                <div className='flex-center flex-align'>
                    <BiEditAlt style={{fontSize:'12px', marginTop:'0px', marginRight:'5px'}}/>
                    <p className='m-t-10 m-l-5 nine-size'>Edit profile</p>
                </div>
                <p className='m-t-10 nine-size'>Member since April 2022</p>
                <div className='nine-size m-t-20' style={{fontSize:"11px"}}>
                        <p className='nine-size' style={{marginBottom:'-8px'}}>Profile completion</p>
    <Progress className='' percent={50} status="active" style={{width:'60%', marginTop:'px'}}/>

                    </div>
            <div className='flex-between m-t-10 nine-size' style={{fontSize:"11px"}}>
                <p>Ratings</p>
                <p>* * * * *</p>
             </div>

                </div>

                

                    
                    

                    <div className=''>
                <h2 className='m-t-20'>Pitch Video</h2>
               

<div className='p-10 flex-center'>
                    <div className='div-background flex-align flex-center position-relative' style={{ alignSelf:'center', }}>
                        <img style={{width:'100%', height:'230px'}} src = {clients}/>
                        <img className='absolute' style={{width:'25px', zIndex:'12', marginLeft:'5px'}} src = {clients2}/>
                <img className='absolute' style={{width:'50px'}} src = {clients3}/>

                </div>

                </div>

                   </div>

                   <div className='' style={{fontSize:'12px'}}>
                <h2 className='m-t-20'>Language</h2>
                {/* <img src = {logo} style={{width:"105px", height:"105px"}}/> */}
                <p className='m-t-20'>English: Native</p>
                <p className='m-t-20'>Hausa: Fluent</p>
                <p className='m-t-20'>Igbo: Fluent</p>

                   </div>

                   <div className='' style={{fontSize:'12px'}}>
                <h2 className='m-t-20'>Hours Per week</h2>
                {/* <img src = {logo} style={{width:"105px", height:"105px"}}/> */}
                <p className='m-t-20'>More than 30hours</p>
                {/* <p className='m-t-20'>Hausa: Fluent</p>
                <p className='m-t-20'>Igbo: Fluent</p> */}

                   </div>
                   <div className='' style={{fontSize:'12px'}}>
                <h2 className='m-t-20'>Linked Accounts</h2>
                {/* <img src = {logo} style={{width:"105px", height:"105px"}}/> */}
                <p className='m-t-20'>Data Analysis</p>
                <p className='m-t-20'>Instagram</p>
                <p className='m-t-20'>LinkedIn</p>
                <p className='m-t-20'>Twitter</p>
                {/* <p className='m-t-20'>Hausa: Fluent</p>
                <p className='m-t-20'>Igbo: Fluent</p> */}

                   </div>
                   <div className='' style={{fontSize:'12px'}}>
                <h2 className='m-t-20'>My Categories </h2>
                {/* <img src = {logo} style={{width:"105px", height:"105px"}}/> */}
                <p className='m-t-20'>Product Designer</p>
                <p className='m-t-20'>Customer Experience & Tech Support</p>
                

                   </div>

                   <div className='' style={{fontSize:'12px'}}>
                <h2 className='m-t-20'>Certification</h2>
                {/* <img src = {logo} style={{width:"105px", height:"105px"}}/> */}
                <p className='m-t-20'>Data Analysis</p>
                <p className='m-t-20'>Utava</p>
                <p className='m-t-20'>UI/UX</p>
                {/* <p className='m-t-20'>Hausa: Fluent</p>
                <p className='m-t-20'>Igbo: Fluent</p> */}

                   </div>

                   <div className='' style={{fontSize:'12px'}}>
                <h2 className='m-t-20'>Education</h2>
                {/* <img src = {logo} style={{width:"105px", height:"105px"}}/> */}
                <p className='m-t-20'>Data Analysis</p>
                <p className='m-t-20'>Utava</p>
                <p className='m-t-20'>UI/UX</p>
                {/* <p className='m-t-20'>Hausa: Fluent</p>
                <p className='m-t-20'>Igbo: Fluent</p> */}

                   </div>
                   <div className='flex-center' style={{fontSize:'12px'}}>
                {/* <div className='w-50'>
                    <h2 className='m-t-'>Feedback from clients</h2>
                    <div class="flex">
                    <img className='round-border m-r-20' src = {bro} style={{width:"20px", height:"20px"}}/>
                    <div className='align-left'>
                        <p style={{marginBottom:'5px'}}>Finegirlliv</p>
                        <div class="flex-align m-b-10" >
                        <MdAddLocationAlt style={{marginBottom:'px', marginRight:'17px'}}/>
                            <p className='no-margin nine-size'>United States</p>
                        </div>
                    </div>
                    </div>
                    
                    <p className='m-t- medium-size'>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. 
                    Nisl sit risus vitae enim, lectus.</p>
                </div> */}

                   </div>
               

            </nav>
        </div>
    )
}
export default ProfileNav;
