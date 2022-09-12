//  import React from 'react';
// import ReactDOM from 'react-dom';
// import Section7Cards from '../Section7cards';
// import trustedBy1 from '../../images/Rectangle.png'
// import trustedBy2 from '../../images/Vector (3).png'
// import trustedBy3 from '../../images/trustedBy-3.png'
// import trustedBy4 from '../../images/trustedBy-4.png'
// import NumberedCards from './NumberedCards';
// import UploadButton from '../UploadButton';
// import "antd/lib/button/style/index.css";
// import "antd/lib/input/style/index.css";
// import "antd/lib/select/style/index.css";
// // import "antd/lib/search/style/index.css";


// // import Icon from 'antd/lib/icon';
// // import Card from 'antd/lib/card';
// import { Button, Input, Select } from 'antd';
// // import 'antd/dist/antd.css'
// // import TextArea from 'antd/lib/input/TextArea';

// const  {TextArea } = Input
// const { Option } = Select;


// const PersonalInfo = () => {
//     return (

//        <div className='general-padding w-60'>
//         <div class="align-left">
//             <h1 className='large-font m-b-40'>Personal Information</h1>
//             <h2 className='align-left'>Add a title that tells what you do and who you are</h2>
//             <Input placeholder='E.g : Customer Experience & Tech Support |Software Tester'/>
//         </div>

//         <div class="align-left m-t-40">
//             <h1 className='large-font m-b-40'>Bio</h1>
//             <TextArea rows={10}/>
//             <p className='m-b-40'>Minimum of  100 characters</p>

//         </div>


//         <div class="flex flex-center">
//             <div class=" flex-between w-60">
//                 <div>
//                     <h1>Profile Picture</h1>
//                     <UploadButton/>
//                 </div>
//                 <div>
//                     <h1>Pitch Video</h1>
//                     <UploadButton/>
//                 </div>
//             </div>
//         </div>

//         <div class="m-b-40 align-left">
//         <h2>Languages</h2>

//         <Select
//     showSearch
//     style={{
//       width: 200,
//     }}
//     placeholder="Search to Select"
//     optionFilterProp="children"
//     filterOption={(input, option) => option.children.includes(input)}
//     filterSort={(optionA, optionB) =>
//       optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
//     }
//   >
//     <Option value="1">Not Identified</Option>
//     <Option value="2">Closed</Option>
//     <Option value="3">Communicated</Option>
//     <Option value="4">Identified</Option>
//     <Option value="5">Resolved</Option>
//     <Option value="6">Cancelled</Option>
//   </Select>

//   <Select
//     showSearch
//     style={{
//       width: 200, marginLeft:"20px"
//     }}
//     placeholder="Search to Select"
//     optionFilterProp="children"
//     filterOption={(input, option) => option.children.includes(input)}
//     filterSort={(optionA, optionB) =>
//       optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
//     }
//   >
//     <Option value="1">Not Identified</Option>
//     <Option value="2">Closed</Option>
//     <Option value="3">Communicated</Option>
//     <Option value="4">Identified</Option>
//     <Option value="5">Resolved</Option>
//     <Option value="6">Cancelled</Option>
//   </Select>
//         </div>

       

        




        
//         <div className='flex w-100 m-b-50 m-t-50' style={{justifyContent:'flex-end'}} >
//             <div className='w-50  w-100  m-b-50 flex flex-between'>
//             <Button  className='m-t-10.buttons' style={{borderRadius:'10px', marginTop:'10px', height:'42px', width:'120px', backgroundColor:'#5B0877', color:"white",}}>Back</Button>
//             <Button  className='m-t-10.buttons' style={{borderRadius:'10px', marginTop:'10px', height:'42px', backgroundColor:'transparent',}}>Continue</Button>
//             </div>
//         </div>
//        </div>
//     )
// }
// export default PersonalInfo;

import React from 'react';
import ReactDOM from 'react-dom';
import Section7Cards from '../Section7cards';
import trustedBy1 from '../../images/Rectangle.png'
import trustedBy3 from '../../images/trustedBy-3.png'
import trustedBy4 from '../../images/trustedBy-4.png'
import NumberedCards from './NumberedCards';
import UploadButton from '../UploadButton';
// import "antd/lib/button/style/index.css";
// import "antd/lib/input/style/index.css";
// import "antd/lib/select/style/index.css";
// import "antd/lib/datePicker/style/index.css";

import { AiOutlinePlusCircle } from 'react-icons/ai';
// import Icon from 'antd/lib/icon';
// import Card from 'antd/lib/card';
import { Button, Input, Select, DatePicker,Progress } from 'antd';
// import { Button, Input, Progress } from 'antd';

import 'antd/dist/antd.css'
import ProfileNav from './ProfileNav';
import ClientNavBar from './ClientNavBar';
import { useNavigate } from 'react-router-dom';
// import TextArea from 'antd/lib/input/TextArea';

const  {TextArea } = Input
const { Option } = Select;


const PersonalInfo = (prop) => {
  const  history = useNavigate();

    // const {history} = 
    const redirect = ()=>{
        history('/sign-up/work-history')
    }
    return (

       <div className=' text-color-purple '>
        {/* <ProfileNav/> */}
        <ClientNavBar/>
        <div class="general-padding">
            <div class="align-left">
                <div className='border2b' style={{padding:' 30px 0px'}}>
                    <div className='flex-align flex-between'>
                        <div className='flex'>
                            <h1 classNpame='large-font bold m-b-40 m-r-20'>Personal Information</h1>
                            <AiOutlinePlusCircle style={{fontSize:'30px', marginTop:'10px', marginLeft:'30px'}}/>
                        </div>
                        <div style={{width:'40%', marginTop:'px'}}>
                            <p className='medium-size no-margin m-b-10px bold'>Completion rate</p>
                            <Progress className='' percent={50} status="active" style={{marginTop:'5px'}} />
                        </div>
            
                    </div>
                <div class="w-60">
                  <h2 className='align-left m-b-20'>Add a title that tells what you do and who you are</h2>
                  <Input className='buttons' placeholder='E.g : Customer Experience & Tech Support |Software Tester'/>
                    <h2 className='nine-size m-t-10'>Minimum of 4 letters</h2>
                </div>
                  {/* <Progress className='' percent={50} status="active" style={{width:'100%', marginTop:'px'}}/> */}
                  

                </div>

                <div className='border2b'>
                  <div class="m-b-50 w-60 p-30-0 ">
                        <h2>BIO</h2>
                    <TextArea placeholder='   Tell a bit about your strength, what makes you stand out, your expertise and strengths ' className='buttons' rows={6}/>
                        <h2 className='nine-size m-t-10'>Minimum of 100 letters</h2>
                  </div>
                </div>
            
                <div class="flex align-left border2b p-30-0">
             <div class=" flex-between  w-60" style={{marginLeft:'30px'}}>
                 <div>
                     <h2>Profile Picture</h2>
                     <UploadButton/>
                 </div>
                 <div>
                     <h2>Pitch Video</h2>
                     <UploadButton/>
                 </div>
             </div>
         </div>
               </div>
            <div class="align-left w-40 w-100 m-t-40">
                <h2 className='m-b-40'>Languages</h2>
                <Select
    showSearch
    style={{
      width: '', display:'block'
    }}
    className='m-b-50 w-100'
    placeholder="Languages"
    optionFilterProp="children"
    filterOption={(input, option) => option.children.includes(input)}
    filterSort={(optionA, optionB) =>
      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
    }
  >
    <Option value="1">Not Identified</Option>
    <Option value="2">Closed</Option>
    <Option value="3">Communicated</Option>
    <Option value="4">Identified</Option>
    <Option value="5">Resolved</Option>
    <Option value="6">Cancelled</Option>
  </Select>

  <Select
     showSearch
     style={{
      //  width: ,
     }}
     className='w-100'
     placeholder="Language Level"
     optionFilterProp="children"
     filterOption={(input, option) => option.children.includes(input)}
     filterSort={(optionA, optionB) =>
       optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
     }
   >
     <Option value="1">Not Identified</Option>
     <Option value="2">Closed</Option>
     <Option value="3">Communicated</Option>
     <Option value="4">Identified</Option>
     <Option value="5">Resolved</Option>
     <Option value="6">Cancelled</Option>
   </Select>


            </div>
            
            
            
            <div className='flex w-100 m-b-60 m-t-40' style={{justifyContent:'flex-end'}} >
                <div className='w-50  w-100  m-t-90 flex flex-between'>
                <Button  className='m-t-10.buttons' style={{borderRadius:'10px', marginTop:'10px', height:'42px', width:'120px', backgroundColor:'#5B0877', color:"white",}}>Back</Button>
                <Button onClick={redirect} className='m-t-10.buttons' style={{borderRadius:'10px', marginTop:'10px', height:'42px', backgroundColor:'transparent',}}>Continue</Button>
                </div>
            </div>
        </div>
       </div>
    )
}
export default PersonalInfo;

