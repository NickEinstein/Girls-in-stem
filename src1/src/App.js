


import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import Page6LOGIN from './Components/Page6Login';
import SignupAsClient from './Components/Clients/signupAsClient';

import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import FindYourPerfectJob14 from './Components/FindYourPerfectJob14';
import ProtectedRoute from './Routes/ProtectedRoute';
import UserPortal from './Components/UserPortal';
import PortalRoutes from './Routes/PortalRoutes';
// import signupAsClient from './Components/Clients/signupAsClient';
import PasswordPage from './Components/Clients/PasswordPage';
import ClietDashboard from './Components/Clients/ClientDashboard';
import MakesAgreatProfile from './Components/Clients/MakesAgreatProfile';
// import clietDashboard from './Components/Clients/clietDashboard';
import CreateProfile from './Components/Clients/CreateProfile';
import GetToKnowYou from './Components/Clients/GetToKnowYou';
import PreviewProfessionalInfo from './Components/Clients/PreviewProfessionalInfo';
import PersonalInfo from './Components/Clients/PersonalInfo';
import ProfessionalInfo from './Components/Clients/ProfesionalInfo';
import LinkAccounts from './Components/LinkAccounts';
import AccountSecurity from './Components/Clients/AccountSecurity';
import VerifyPhoneNum from './Components/Clients/VerifyPhoneNum';
import Charges from './Components/Clients/Charges';
import ProfileDashboard from './Components/Clients/ProfileDashboard';
import WorkHistory from './Components/Clients/WorkHistory';
import WelcomeProfile from './Components/Profile/WelcomeProfile';
import NumberedHeader from './Components/Profile/NumberedHeader';
import SetUpProfile from './Components/Profile/SetUpProfile';



// import Dashboard from './Dashboard'

function App() {
  // const history = createBrowserHistory();
  // console.log(history)
  // console.log(PortalRoutes)

  return (
    <div className="App">
       {/* <Navbar /> */}
       <Router>
         <Routes>
         <Route element={<ProtectedRoute/>} >
          
          <Route path="/sign-up" element={<Page6LOGIN/>} />
          <Route path='/sign-up/client-signup' exact element={<SignupAsClient/>} /> 
          
          <Route
      path="/sign-up/job-registration"
      exact
      element={<FindYourPerfectJob14/>}
    />

<Route
      path="/sign-up/client-login"
      exact
      // element={AddItem}
      element={<SignupAsClient/>}
    />
    
     <Route
      path="/sign-up/input-password"
      exact
      // element={AddItem}
      element={<PasswordPage/>}
    />
    <Route
      path="/sign-up/client-dashboard"
      exact
      // element={AddItem}
      element={<ClietDashboard/>}
    />
    <Route
      path="/sign-up/makes-great-profile"
      exact
      // element={AddItem}
      element={<MakesAgreatProfile/>}
    />
    
    <Route
      path="/sign-up/create-profile"
      exact
      // element={AddItem}
      element={<CreateProfile/>}
    />
    <Route
      path="/sign-up/get-to-know-you"
      exact
      // element={AddItem}
      element={<GetToKnowYou/>}
    />
    <Route
      path="/sign-up/preview-professional-info"
      exact
      // element={AddItem}
      element={<PreviewProfessionalInfo/>}
    />
    <Route
      path="/sign-up/personal-info"
      exact
      // element={AddItem}
      element={<PersonalInfo/>}
    />
    <Route
      path="/sign-up/professional-info"
      exact
      // element={AddItem}
      element={<ProfessionalInfo/>}
    />
    <Route
      path="/sign-up/link-accounts"
      exact
      // element={AddItem}
      element={<LinkAccounts/>}
    />
    <Route
      path="/sign-up/account-security"
      exact
      // element={AddItem}
      element={<AccountSecurity/>}
    />
     <Route
      path="/sign-up/verify-phone"
      exact
      // element={AddItem}
      element={<VerifyPhoneNum/>}
    />
     <Route
      path="/sign-up/charges"
      exact
      // element={AddItem}
      element={<Charges/>}
    />
     <Route
      path="/sign-up/profile-dashboard"
      exact
      // element={AddItem}
      element={<ProfileDashboard/>}
    />
 <Route
      path="/sign-up/profile-welcome"
      exact
      // element={AddItem}
      element={<WelcomeProfile/>}
    />


<Route
      path="/sign-up/work-history"
      exact
      // element={AddItem}
      element={<WorkHistory/>}
    />

<Route
      path="/sign-up/set-up-profile"
      exact
      // element={AddItem}
      element={<SetUpProfile/>}
    />

<Route
      path="/sign-up/welcome-profile"
      exact
      // element={AddItem}
      element={<WelcomeProfile/>}
    />


         
         </Route>

           <Route path="/" element={<Dashboard/>} />
           <Route path="*" element={ <h1>Error 404. Page not found.</h1>} />
           {/* <Route path="about" element={<About />} /> */}
         </Routes>
       </Router>
     </div>
  );
}

export default App;



