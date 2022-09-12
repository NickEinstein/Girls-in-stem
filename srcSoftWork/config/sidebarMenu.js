/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { RiBarChartFill, RiUserSettingsLine } from 'react-icons/ri';
import { BiEnvelope } from 'react-icons/bi';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ReceiptIcon from '@material-ui/icons/Receipt';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import { AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

export const admin = [
  { title: 'Home', href: '/adminstore-portal/home', icon: <AiOutlineHome className="icon" /> },
  { title: 'User Manual', href: '/adminstore-portal/user-manual', icon: <HelpOutlineIcon className="icon" /> },
  { title: 'Dashboard', href: '/adminstore-portal', icon: <BiEnvelope className="icon" /> },

  { title: 'Inventory Manager', href: '/adminstore-portal/inventory-manager/requisition', icon: <MdDashboard className="icon" />,
  children: [
    { title: 'Add/Update Items', href:'/adminstore-portal/inventory-manager/add-items', icon:'ED'  },
    { title: 'Requisition', href: '/adminstore-portal/inventory-manager/requisition', icon: 'CP' },
    { title: 'Review Request', href: '/adminstore-portal/inventory-manager/review-request', icon: 'ED' },
    { title: 'Inventory', href: '/adminstore-portal/inventory-manager/inventory', icon: 'ED' }
  ] },
  { title: 'Warehouse Manager', href: '/adminstore-portal/warehouse-manager/requisition', icon: <RiUserSettingsLine className="icon" />,
  children: [
    { title: 'Add/Update Items', href:'/adminstore-portal/warehouse-manager/add-items', icon:'ED'  },
    { title: 'Requisition', href: '/adminstore-portal/warehouse-manager/requisition', icon: 'CP' },
    { title: 'Review Request', href: '/adminstore-portal/warehouse-manager/review-request', icon: 'ED' },
    { title: 'Warehouse', href: '/adminstore-portal/warehouse-manager/warehouse', icon: 'ED' }
  ] },
  { title: 'Report', href: '/adminstore-portal/request-report', icon: <PersonIcon className="icon" /> },
  { title: 'History', href: '/adminstore-portal/request-history', icon: <PersonIcon className="icon" /> },
  { title: 'Settings', href: '/adminstore-portal/facility-settings', icon: <SettingsIcon className="icon" /> },
 
  { title: 'Log Out', href: '/adminstore-portal/logout', icon: <AiOutlineLogout className="icon" /> },

];
  
export const inventory = [
  { title: 'Home', href: '/adminstore-portal/home', icon: <AiOutlineHome className="icon" /> },
  { title: 'User Manual', href: '/adminstore-portal/user-manual', icon: <HelpOutlineIcon className="icon" /> },

  { title: 'Dashboard', href: '/adminstore-portal', icon: <BiEnvelope className="icon" /> },

  { title: 'Inventory Manager', href: '/adminstore-portal/inventory-manager/requisition', icon: <MdDashboard className="icon" />,
  children: [
    { title: 'Add/Update Items', href:'/adminstore-portal/inventory-manager/add-items', icon:'ED'  },
    { title: 'Requisition', href: '/adminstore-portal/inventory-manager/requisition', icon: 'CP' },
    { title: 'Review Request', href: '/adminstore-portal/inventory-manager/review-request', icon: 'ED' },
    { title: 'Inventory', href: '/adminstore-portal/inventory-manager/inventory', icon: 'ED' }
  ] },
  { title: 'Warehouse Manager', href: '/adminstore-portal/warehouse-manager/requisition', icon: <RiUserSettingsLine className="icon" />,
  children: [
    
    { title: 'Requisition', href: '/adminstore-portal/warehouse-manager/requisition', icon: 'CP' },
  ] },
  { title: 'History', href: '/adminstore-portal/request-history', icon: <PersonIcon className="icon" /> },
 
  { title: 'Log Out', href: '/adminstore-portal/logout', icon: <AiOutlineLogout className="icon" /> },

];

export const warehouse = [
  { title: 'Home', href: '/adminstore-portal/home', icon: <AiOutlineHome className="icon" /> },
  { title: 'User Manual', href: '/adminstore-portal/user-manual', icon: <HelpOutlineIcon className="icon" /> },

  { title: 'Dashboard', href: '/adminstore-portal', icon: <BiEnvelope className="icon" /> },

  { title: 'Warehouse Manager', href: '/adminstore-portal/warehouse-manager/requisition', icon: <RiUserSettingsLine className="icon" />,

  children: [
    { title: 'Add/Update Items', href:'/adminstore-portal/warehouse-manager/add-items', icon:'ED'  },
    { title: 'Requisition', href: '/adminstore-portal/warehouse-manager/requisition', icon: 'CP' },
    { title: 'Review Request', href: '/adminstore-portal/warehouse-manager/review-request', icon: 'ED' },
    { title: 'Warehouse', href: '/adminstore-portal/warehouse-manager/warehouse', icon: 'ED' }
  ] },
  { title: 'History', href: '/adminstore-portal/request-history', icon: <PersonIcon className="icon" /> }, 
  { title: 'Log Out', href: '/adminstore-portal/logout', icon: <AiOutlineLogout className="icon" /> },

];

export const user = [
  { title: 'Home', href: '/adminstore-portal/home', icon: <AiOutlineHome className="icon" /> },
  { title: 'User Manual', href: '/adminstore-portal/user-manual', icon: <HelpOutlineIcon className="icon" /> },

  { title: 'Dashboard', href: '/adminstore-portal', icon: <BiEnvelope className="icon" /> },

  { title: 'Inventory Manager', href: '/adminstore-portal/inventory-manager/requisition', icon: <MdDashboard className="icon" />,
  children: [
    // { title: 'Requisition', href: '/adminstore-portal/inventory-manager/requisition', icon: 'CP' },

    { title: 'Requisition', href: '/adminstore-portal/inventory-manager/requisition', icon: 'CP' },
    // { title: 'Review Request', href: '/adminstore-portal/inventory-manager/review-request', icon: 'ED' },

  ] },
  // { title: 'Warehouse Manager', href: '/adminstore-portal/warehouse-manager/requisition', icon: <RiUserSettingsLine className="icon" />,
  // children: [
  //   // { title: 'Requisition', href: '/adminstore-portal/warehouse-manager/requisition', icon: 'CP' },
  //   { title: 'Review Request', href: '/adminstore-portal/warehouse-manager/review-request', icon: 'ED' },
  // ] },
  
  { title: 'History', href: '/adminstore-portal/request-history', icon: <PersonIcon className="icon" /> },
 
  { title: 'Log Out', href: '/adminstore-portal/logout', icon: <AiOutlineLogout className="icon" /> },

];

export const supervisor = [
    { title: 'Home', href: '/adminstore-portal/home', icon: <AiOutlineHome className="icon" /> },
    { title: 'User Manual', href: '/adminstore-portal/user-manual', icon: <HelpOutlineIcon className="icon" /> },
  
    { title: 'Dashboard', href: '/adminstore-portal', icon: <BiEnvelope className="icon" /> },
  
    { title: 'Inventory Manager', href: '/adminstore-portal/inventory-manager/requisition', icon: <MdDashboard className="icon" />,
    children: [
      { title: 'Requisition', href: '/adminstore-portal/inventory-manager/requisition', icon: 'CP' },
    { title: 'Review Request', href: '/adminstore-portal/inventory-manager/review-request', icon: 'ED' },
     
    ] },
    { title: 'Warehouse Manager', href: '/adminstore-portal/warehouse-manager/requisition', icon: <RiUserSettingsLine className="icon" />,
  children: [
    // { title: 'Requisition', href: '/adminstore-portal/warehouse-manager/requisition', icon: 'CP' },
    { title: 'Review Request', href: '/adminstore-portal/warehouse-manager/review-request', icon: 'ED' },
  ] },
    { title: 'Report', href: '/adminstore-portal/request-report', icon: <PersonIcon className="icon" /> },
    { title: 'History', href: '/adminstore-portal/request-history', icon: <PersonIcon className="icon" /> },
   
    { title: 'Log Out', href: '/adminstore-portal/logout', icon: <AiOutlineLogout className="icon" /> },
  
  ];

