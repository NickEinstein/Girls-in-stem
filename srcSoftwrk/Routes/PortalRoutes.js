import React, { lazy, PureComponent, Suspense } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { pure } from 'recompose';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
// import ProtectedRoute from './ProtectedRoute';
// import IsLoading from '../assets/IsLoading'
import sessionHOC from '../hoc/SessionHOC.jsx' 
// import Cookies from 'universal-cookie'
//import Dashboard1 from '../components/Dashboard1'
// import Dash from './../Dash'
// import Page5 from '../components/signupAsClient'
import signupAsClient from '../Components/Clients/signupAsClient';
import Page6LOGIN from '../Components/Page6Login';
import FindYourPerfectJob from '../Components/FindYourPerfectJob14';
import FindYourPerfectJob14 from '../Components/FindYourPerfectJob14';
import PasswordPage from '../Components/Clients/PasswordPage';
import clietDashboard from '../Components/Clients/ClientDashboard';
import CreateProfile from '../Components/Clients/CreateProfile';
import GetToKnowYou from '../Components/Clients/GetToKnowYou';
import PersonalInfo from '../Components/Clients/PersonalInfo';
import WorkHistory from '../Components/Clients/WorkHistory';
import ProfessionalInfo from '../Components/Clients/ProfesionalInfo';
import LinkAccounts from '../Components/LinkAccounts';
import AccountSecurity from '../Components/Clients/AccountSecurity';
import VerifyPhoneNum from '../Components/Clients/VerifyPhoneNum';
import Charges from '../Components/Clients/Charges';
import ProfileDashboard from '../Components/Clients/ProfileDashboard';
import MakesAgreatProfile from '../Components/Clients/MakesAgreatProfile';
import PreviewProfessionalInfo from '../Components/Clients/PreviewProfessionalInfo';

// import Page6 from '../components/Page6'
// import Page7 from '../components/Page7'
// import Page8 from '../components/Page8'
// import Page9 from '../components/Page9'
// import Page19 from '../components/Page19'
// import Page10 from '../components/Page10'
// import Page11 from '../components/Page11'
// import Page12 from '../components/Page12'
// import Page41 from '../components/Page41';
// import Chartings from '../components/Chartings';

// const cookies = new Cookies()

// const  Dash = lazy(() => import('./../Dash'))
// const  Page5 = lazy(() => import('../components/Page5'))

// const  Page6 = lazy(() => import('../components/Page6'))
// const  Page7 = lazy(() => import('../components/Page7'))
// const  Page8 = lazy(() => import('../components/Page8'))
// const  Page9 = lazy(() => import('../components/Page9'))
// const  Page10 = lazy(() => import('../components/Page10'))
// const  Page11 = lazy(() => import('../components/Page11'))
// const  Page12 = lazy(() => import('../components/Page12'))
// const  Page22 = lazy(() => import('../components/Page22'))
// const  Page41 = lazy(() => import('../components/Page41'))
// const  Page37 = lazy(() => import('../components/Page37'))
// const  Page14 = lazy(() => import('../components/Page14'))
// const  AddItem = lazy(() => import('../components/AddItem'))
// const  AddItemW = lazy(() => import('../components/AddItemW'))
// const  Page30 = lazy(() => import('../components/Page30'))
// const  Chartings = lazy(() => import('../components/Chartings'))
// const  History = lazy(() => import('../components/History'))





// const Dashboard1 = lazy(() => import('../components/Dashboard1'))
// const RequestForm = lazy(() => import('../components/RequestForm'))
// const RequestReport = lazy(() => import('./../components/pages/RequestReport'))
// const ViewMemoForm = lazy(() => import('../components/pages/ViewMemoForm'))
// const RequestManagement8 = lazy(() => import('./../pages/RequestManagement8'))
// const  ReviewRequest = lazy(() => import('./../components/MaintenanceRequestManagement'))
// const Page6Final = lazy(() => import('./../components/Page6Final'))
// const  IsLoading = lazy(() => import('../assets/IsLoading'))
// const  FacMaintenance7 = lazy(() => import('./../components/pages/FacMaintenance7'))








export default (
  <Route path="/sign-up" element={<Page6LOGIN/>} />

)



{/* <Suspense fallback={<IsLoading show={true}/>}> */}
    //  <Route
    //   path='/sign-up/client-signup'
    //   exact
    // //  component={RequestMaintenance}
    // element={sessionHOC(<signupAsClient/>)}
    // // element={signupAsClient}
    // /> 

     
     {/* <Route
      path="/sign-up/job-registration"
      
      // element={AddItem}
      element={<FindYourPerfectJob14/>}
    />
     <Route
      path="/sign-up/client-login"
      exact
      // element={AddItem}
      element={<signupAsClient/>}
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
      element={<clietDashboard/>}
    />
    <Route
      path="/sign-up/makes-great-profile"
      exact
      // element={AddItem}
      element={<MakesAgreatProfile/>}
    />
    <Route
      path="/sign-up/client-dashboard"
      exact
      // element={AddItem}
      element={<clietDashboard/>}
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
      path="/sign-up/work-history"
      exact
      // element={AddItem}
      element={<WorkHistory/>}
    /> */}


   
{/* <Route
      path="/adminstore-portal/logout"
      exact
      component={()=>{
                    cookies.remove('role',  {path:"/"});
                    cookies.remove('email', {path:"/"});
                    cookies.remove('picture', {path:"/"});
                    cookies.remove('userSequence', {path:"/"})
                    cookies.remove('tokenExist', {path:"/"})


                    //cookies.remove(ModuleName + "_FirstName", user_auth.data.firstName);
                    cookies.remove(
                        'fullname', {path:"/"});
                    cookies.remove('loginTime', {path:"/"});
                    // cookies.remove(ModuleName + "_LastName", user_auth.data.lastName);
                    cookies.remove('token', {path:"/"});
                    cookies.remove('tokenExist', true);
                    cookies.remove('firstName', {path:"/"});
                    cookies.remove('lastName', {path:"/"});
                    cookies.remove('staffNumber', {path:"/"});

                    cookies.remove('mda', {path:"/"})

                    // cookies.remove('homeLink', {path:"/"}); //for home redirection
                    window.location.assign(
                      cookies.get("homeLink")
                      //'https://portal-test.greenzonetechnologies.com.ng/'
                      )
                    return <IsLoading show={true} /> 

      }}
    />*/}

{/* <ProtectedRoute
      path="/adminstore-portal/home"
      exact
      component={()=>{
        window.location.assign(
          cookies.get("homeLink")
          //'https://portal-test.greenzonetechnologies.com.ng/portal'
          )
        return <IsLoading show={true} />
      }}
    /> */}
   
   {/* <ProtectedRoute
      path="/adminstore-portal/user-manual"
      exact
      component={()=>{
        window.open(`${cookies.get('APIBaseURL') + cookies.get('helpLink')}`, '_blank').focus()
        return <IsLoading show={true} />
      }}
    /> */}

     {/* </Suspense> */}
      // <Route render={() => <h1>Error 404. Page not found.</h1>} />
     
  



