import React, { useEffect, useState } from 'react';
// import  {React, useEffect,ueState} from 'react';
import ReactDOM from 'react-dom';
import { Input, Checkbox, Form, Button } from 'antd';
import Footer from './Footer';
// import { Footer } from 'antd/lib/layout/layout';

// import { useEffect, useState } from 'react';

const Dashboard = (prop)=>{
   
    return(
        <div>
            <div className='w-100 bg-white general-padding bold' >
               <h1 className='align-center heading-big m-t-100'> JOIN US</h1>
               <p className='left-align p-20-0'>Sign me up*</p>
                <p className='left-align p-20-0'>I’d like to keep up to date and receive newsletters, event invitations, offers and surveys via email. Note: </p>
                <Form
                  name="basic"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  layout='vertical'
                //   initialValues={{ remember: true }}
                //   onFinish={onFinish}
                //   onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
            <div class="left-align p-30-0">
                <Form.Item name="remember">
                     <Checkbox>YES</Checkbox>
                </Form.Item>
            </div>
            
                  <div class="flex-between">
              <div class="w-100 ">
                  <Form.Item
                    label="First Name"
                    name="firstname"
                    rules={[{ required: true, message: 'Please input your first name!' }]}
                  >
                    <Input className='w-90'/>
                  </Form.Item>
              </div>
              <div class="w-100">
                  <Form.Item
                    label="Last Name"
                    name="lastname"
                    rules={[{ required: true, message: 'Please input your last name!' }]}
                  >
                    <Input />
                  </Form.Item>
              </div>
                  </div>
            
                  <div class="flex-between ">
              <div class="w-100 ">
                  <Form.Item
                    label="Location"
                    name="location"
                    rules={[{ required: true, message: 'Please input your location!' }]}
                  >
                    <Input className='w-90' />
                  </Form.Item>
              </div>
              <div class="w-100">
                  <Form.Item
                    label="Phone Number"
                    name="phoneNumber"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                  >
                    <Input />
                  </Form.Item>
              </div>
                  </div>
            
                  <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
                  >
            <Input />
                  </Form.Item>
            
                  
            
                <Form.Item className='left-align '>
            <div className='p-30-0'>
                <Button className='buttons-big' htmlType="submit">
                  Submit
                </Button>
            </div>
                  </Form.Item>
                </Form>
            
               {/*
               <Input placeholder="Basic usage" /> */}
            </div>
            <Footer/>
        </div>
    )
}
export default Dashboard;
