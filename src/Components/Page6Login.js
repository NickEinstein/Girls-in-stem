import React from 'react';
import ReactDOM from 'react-dom';
// import trustedBy1 from './images/Vector.png'
import trustedBy2 from '../images/Rectangle 7.png'
import trustedBy3 from '../images/Rectangle 106.png'
import LoginHeader from './LoginHeader';
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'
import { Button, Input, Select } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;
const Page6LOGIN = (prop) => {
    const onChange = (value) => {
        console.log(`selected ${value}`);
      };
      
      const onSearch = (value) => {
        console.log('search:', value);
      };
   const history = useNavigate()

    const signUpAsClient =()=>{{
        history('/sign-up/client-signup');

    }}
    return (
        
        <div className=' '>
           <LoginHeader/>
           <div className='flex-between login'>
                <div className='p-100' style={{paddingLeft:'',paddingRight:'', minWidth:'40%', maxWidth:'80%', }}>
                    <div className='flex-vertical' style={{maxWidth:'80%'}}>
                        <h1 className='m-b-60'>Join Softwork</h1>
                        <Select
                        placeholder='Location' className='m-b-30'
    showSearch
    // placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option>
  </Select>
                        {/* <Input placeholder='Location' className='m-b-20'/> */}
                        <div class="freelance w-100"><Button onClick={signUpAsClient} className='m-b-30 w-100 login-bck'>Sign up as a client</Button></div>
                        {/* <div className='login-bck w-100'><Button className='w-100' >Continue</Button></div> */}
                        <div class="freelance w-100"><Button className='m-b-60 w-100 login-bck'>Sign up as a freelancer</Button></div>
                        {/* <div className='login-bck w-100'><Button className='w-100' >Continue</Button></div> */}
                        <a href="">
                            <h2 className='size-11 m-t-40'>Already a Member? <b>Log In</b></h2>
                        </a>
                    </div>
                </div>
                <div className='relative flex-align flex-center w-50' style={{minHeight:'100%', position:'relative', backgroundColor:'#F6F6F6',}}>
                <div className='two-circles relative' style={{position:'relative'}}></div>
                <img src ={trustedBy3} className='' style={{position:'absolute', top:'50%', height:'49%', width:'98.8%' }}/>
                    {/* <div className='' style={{width:'100px', height:'50px', ottomLeftRadius:'100%',ottomRightRadius:'100%', position:'absolute', bottom:'0px', opColor:'blue'}}></div> */}
                </div>

           </div>
        </div>
    )
}
export default Page6LOGIN;
