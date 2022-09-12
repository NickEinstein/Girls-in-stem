

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Navigate, Outlet, useNavigate, useLocation } from 'react-router-dom';
// import Cookies from 'universal-cookie'


// const cookies = new Cookies()
const ProtectedRoute = ({ children, redirectTo }) => {
  console.log(children)
  let history = useNavigate()
  let location = useLocation()
  let auth = {token:true}
  // const il = true
  // const il = cookies.get('tokenExist') || false; // isLoggedin
  
  // (!auth.token && console.log(auth.token))()

  return (
    auth.token? <Outlet/> : <Navigate to ='/' state = {{from:location}} replace/>
  );
};

export default ProtectedRoute;
