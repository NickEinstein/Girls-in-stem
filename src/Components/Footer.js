import React from 'react';
import ReactDOM from 'react-dom';
import { BsYoutube,BsFacebook,BsInstagram, BsApple, BsFillFileEarmarkCodeFill } from 'react-icons/bs';
import { AiFillAndroid,AiOutlineCopyright, AiFillUnlock } from 'react-icons/ai';
import { Button, Input } from 'antd';



const Footer = () => {

    const {TextArea} = Input
    return (
        <div className='p-50' style={{backgroundColor:'#370548'}} >
            <div className='flex-between color-w p-50 '>
                <section className='w-50 color-w border-left-col flex-center '>
                    <div>
                        <h2 style={{fontSize:"22px", marginBottom:'', color:'white'}}>Support Girls in STEM</h2>
                        <h3 className='color-w'>Become a partner or sponsor an event</h3>
                        <div className='flex-between w-70 p-50-0 '>
                            <Button className='buttons-big m-r-10'>Donate</Button>
                            <Button className='buttons-big'>Sponsor</Button>
                        </div>
                    </div>
                </section>

                <section className='w-50 p-0-20 footer-2sec flex-center'>
                    <div className='0'>
                        <h2 style={{fontSize:"22px", marginBottom:'', color:'white'}}>Sign Up For Our  Newsletter</h2>
                        <h3 className='color-w'>Get access to the latest news, resources, and opportunities </h3>
                        <div className='p-50-0  flex-center'>
                            <div class="">
                                <TextArea rows={7}/>
                                <Button className='buttons-big m-t-30'>Submit</Button>
                            </div>
                        </div>
                    </div>
                </section>

               
            </div>

           


            

                     
        </div>
    )
}
export default Footer;
