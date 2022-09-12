import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../../images/landing4.png'
import bro from '../../images/landing4.png'
import { Button, Input } from 'antd';
import trustedBy1 from '../../images/Popular1.png'
import news from '../../images/Add New.png'
import trustedBy2 from '../../images/Rectangle 7.png'
// import trustedBy2 from './images/trustedBy-2.png'
import trustedBy3 from '../../images/Popular2.png'
import trustedBy4 from '../../images/Popular3.png'

import { BiEdit } from 'react-icons/bi';
import Section5Cards from '../Section5Cards';
import { useNavigate } from 'react-router-dom';

const MainPage = (prop)=>{
        const  history  = useNavigate();
        // console.log(prop)

    const redirect = ()=>{

        history('/sign-up/welcome-profile');
    }
    return(
        <div className='w- align-left text-color-purple' style={{padding:"5% 5%",}}>
            <div className=' ' >
                <h2>UI/UX||Graphics||Data Analyst||Content Creator
||CV Writer|| </h2>

<div>
    <p className=''>Hi, Thanks for coming to my page 😊</p>
    
    <p className=''>I am a lawyer with skills in Data analysis, graphic design and experience in building end to end UIUX designs for digital products.</p>
    
    <p>My expertise include:</p>
    
    <p>Wireframing</p>
    <p>User Experience Design</p>
    <p>Figma</p>
    <p>Prototyping</p>
    <p>Adobe Photoshop and</p>
    <p>Sketch</p>
    <p>Exporting figma files to HTML</p>
    <p>Logo designs</p>
    <p>Branding</p>
    
    <p>When it comes analysing data, I have expertise in the use of Excel, PowerBi, and PosgreSQL.</p>
</div>
                
               

            </div>
            <div className='p-40  align-left'>
                <h2 className='m-b-20'>Work History</h2>
                <p>No work yet. Once you start getting hired on Softwrk your work with clients will show up here. 
</p>
<p>Start your search</p>
            </div>

            <div className='p-40  align-left'>
                <h2 className='m-b-20'>Skill</h2>
                <div>
                UX/UI
  <p>
      Graphic Design
       Greeting Cards & Invitations
  </p>

<p>
    Photo Editing
     Data Analysis
     Canva
     Social Media   Content Creation
</p>

<p>
    Social Media Design
     Social Media Posts
     Virtual Assistant
     Resume Writing
</p></div>
            </div>

            <div className=''>
                <h2 className='m-b-20'>Portfolio</h2>
                <div className='flex-between p-20'>
                    <div className='align-center'>
                        <Section5Cards r = {true} images ={trustedBy1}/>
                        <p className='no-margin nine-size'>Professional Optimized ATS </p>
                        <p className='no-margin nine-size'>Resume and Cover Letter</p>
                    </div>
                    <div className='align-center'>
                        <Section5Cards r = {true} images ={trustedBy1}/>
                        <p className='no-margin nine-size'>Social Media Post Designs</p>
                    </div>
                    <div className='align-center'>
                        <Section5Cards r = {true} images ={trustedBy1}/>
                        <p className='no-margin nine-size'>Logo</p>
                    </div>
                    <div className='align-center'>
                        <Section5Cards r = {true} images ={trustedBy1}/>
                        <p className='no-margin nine-size'></p>
                    </div>
                    
                   
                    
                </div>
            </div>

            <div className=' ' >
                <h2> Work Experience</h2>
                <ul>
                    Brand Communication Expert | Trendiee_zzz, Wowbeddings and Zinnysworld( Online fashion Brands)
                     
                     <p>March 2021 - Present</p>
                     Managed consistent design theme, look and content of organization's presence.
                     <li className='m-t-10'> Coordinated effective placements of media announcements, and print ads for maximum effectiveness and exposure.</li>
                     <li className='m-t-10'> Prepared cross-platform social media promotions, capitalizing on strengths of each site to effectively reach target audiences.</li>
                     <li className='m-t-10'> Revamped online and print materials with my graphic design, photography and design skills</li>
                     <li className='m-t-10'> Developed, utilized and reviewed yearly customer satisfaction surveys.</li>
                     <li className='m-t-10'> Designed concepts and layouts using Canva and Figma.</li>
                </ul>
 
            </div>

            <div className=' ' >
                <h2 className='p-20'> Other Experience</h2>
                <div class="flex-center p-30-0 align-center">
                    <div>
                        <img style={{width:'50px'}} src = {news}/>
                                        
                     <p className='medium-size p-10-0'>Highlighting relevant experiences can boost your visibility in our search results. (+5%)</p>
                    </div>
                </div>
 
            </div>

            <div className=' ' >
                <h2 className='p-20'> Projects</h2>
                <div class="flex-center p-30-0 align-center">
                    <div>
                        <img className='pointer' onClick={redirect} style={{width:'50px'}} src = {news}/>
                                        
                     <p className='medium-size p-10-0'>
                     Create projects on Softwrk and sell, this is another unique way of earning on Softwrk
                        </p>
                    </div>
                </div>
 
            </div>
        </div>
    )
}
export default MainPage;
