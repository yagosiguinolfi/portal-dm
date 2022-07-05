import axios from 'axios';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
  baseURL: /*process?.env.NODE_ENV === 'development' ?*/ 'http://localhost:8080' //: '/api/' http://portal.democrata.com.br/api
});

api.interceptors.request.use(function (request) {
  localStorage.setItem('@Democrata:Token', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJZQUdPLkZFTElQRSIsInJvbGUiOiJST0xFX1VTVUFSSU8iLCJjcmVhdGVkIjoxNjU2NjA1OTc5Mzk3LCJleHAiOjE2NTcyMTA3Nzl9.nFbVwdibr4l6M0WHSM9c6g7uaYa4sQhPqV-lxG3XdQMXa9X0EJ4VcD_xS6tNKVqjEDhnIT3hYTgiEEs4GHTEtQ')
  const token = localStorage.getItem('@Democrata:Token');
  if (token) {
    request!.headers!.Authorization = `Bearer ${token}`;
  }
  return request;
}, (error) => {
  return Promise.reject(error)
});

export default api;