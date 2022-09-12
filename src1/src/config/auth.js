// import Cookies from 'universal-cookie'

// const cookie = new Cookies()
// /**
//  * this function checks the response from an API call to know if the user is unauthorized.
//  * It logs the user out if he/she is unauthorized.
//  * @param {object} res response from the API call
//  * @param {string} index index url that will be redirected to if the response status is 401
//  */
// export const checkUnauthorized = (res, index = '/') => {
//   if (res && res.status === 401) {
//     logout(index, true);
//   }
// };

// export const logout = async (landingPath =  cookie.get("homeLink"), isExpiredSession = false) => {
//   const homeLink =   landingPath  ;
//   cookie.remove('role', {path:"/"});
//   cookie.remove('email', {path:"/"});
//   cookie.remove('picture', {path:"/"});
//   cookie.remove('userSequence', {path:"/"})

//   //cookie.remove(ModuleName + "_FirstName", user_auth.data.firstName);
//   cookie.remove('fullname', {path:"/"});
//   cookie.remove('loginTime', {path:"/"});
//   // cookie.remove(ModuleName + "_LastName", user_auth.data.lastName);
//   cookie.remove('token', {path:"/"});
//   cookie.set('tokenExist', false);
//   cookie.remove('firstName', {path:"/"});
//   cookie.remove('lastName', {path:"/"});
//   cookie.remove('staffNumber', {path:"/"});

//   cookie.remove('mda', {path:"/"})

//   cookie.remove('homeLink', {path:"/"}); //for home redirection
//   cookie.remove('APIBaseURL', {path:"/"});
  
//   isExpiredSession && localStorage.setItem('se', true);
//   window.location.assign(homeLink);
// };
