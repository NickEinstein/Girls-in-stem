/* eslint-disable linebreak-style */
import axios from 'axios';
import paths from './endpoints';

import { decodeToken, logout } from '../utility/auth';

const getToken = () => {
  const t = decodeToken('t');
  const token = t && t.t;
  return token;
};
// const  urls  = 'https://edogoverp.com/';

  // let urls = `${decodeToken('api').api}`;
  // let url = `https://localhost:5001${path}`;


const fetchBackend = async (endpoint, method, auth, body, pQuery, param, multipart) => {
  const headers = {
    'X-API-KEY': 'fq05322d-429b-4f77-8a4p-a97ry62eb37k',
    // 'X-API-KEY': process.env.REACT_APP_API_KEY,
    'Content-Type': multipart ? 'multipart/form-data' : 'application/json'
  };
  const path = paths[endpoint] || endpoint;
  // let url = `${decodeToken('api').api}/schedule${path}`;
  let url = `https://api.softwrk.xyz/${path}`;
  //  let url = `https://localhost:5001${path}`;
   // let url = `http://erpapi.edostate.gov.ng/schedule${path}`;
  console.log(url, 'kolokolo');
  if (param) {
    url += `/${param}`;
  }

  if (pQuery) {
    const paramsArray = Object.keys(pQuery).map((key) => pQuery[key] && `${encodeURIComponent(key)}=${encodeURIComponent(pQuery[key])}`);

    url += `?${paramsArray.join('&')}`;
  }

  if (auth) {
    const token = getToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }
  const options = {
    url, method, headers
  };

  if (body) {
    options.data = body;
  }

  return axios(options)
    .then((res) => res, async (err) => {
      if (err && err.response && err.response.status === 401) {
        // log the user out and return
        await logout(process.env.REACT_APP_JWT_SECRET, true);
      }
      console.log(err.response);
      return err.response;
    });
};

/**
 *
 * @param {string} endpoint
 * @param {object} body
 * @param {object} pQuery
 * @param {string} param
 * @param {boolean} auth
 */
export const get = ({
  endpoint, pQuery, param = null, auth = true, 
}) => fetchBackend(endpoint, 'GET', auth, null, pQuery, param,);

/**
 *
 * @param {string} endpoint
 * @param {object} body
 * @param {string} param
 * @param {boolean} auth
 * @param {boolean} multipart
 */
export const post = ({
  endpoint, body, auth = true, multipart, param
}) => fetchBackend(endpoint, 'POST', auth, body, null, param, multipart);

/**
 *
 * @param {string} endpoint
 * @param {object} body
 * @param {string} param
 * @param {string} pQuery
 * @param {boolean} auth
 * @param {boolean} multipart
 */
export const patch = ({
  endpoint, body, param, pQuery, auth = true, multipart
}) => fetchBackend(endpoint, 'PATCH', auth, body, pQuery, param, multipart);

/**
 *
 * @param {string} endpoint
 * @param {string} param
 * @param {boolean} auth
 */
export const del = ({
  endpoint, param, auth = true
}) => fetchBackend(endpoint, 'DELETE', auth, null, null, param);

/**
 *
 * @param {string} endpoint
 * @param {object} body
 * @param {string} param
 * @param {string} pQuery
 * @param {boolean} auth
 * @param {boolean} multipart
 */
 export const put = ({
  endpoint, body, param, pQuery, auth = true, multipart
}) => fetchBackend(endpoint, 'PUT', auth, body, pQuery, param, multipart);

// export const GetwithQueryStringDoc = async (method, data, callbackfunction) => {
//   const { name, value } = data;

//   const response = axios.get(`${urls}${method}?${name}=${value}`, {
//     headers: {
//       Authorization: `Bearer ${getToken()}`,
//       'Access-Control-Allow-Credentials': true,
//       crossorigin: true,
//       'Access-Control-Allow-Methods': 'GET',
//       'Access-Control-Allow-Origin': '*',
//     },
//   });

//   await response
//     .then((response) => {
//       console.log(response)
//       let result = response.data;
//       callbackfunction(result);
//     })
//     .catch((error) => {
//       callbackfunction(error);
//     });
// }