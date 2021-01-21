import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

//let myInterceptor = 
axios.interceptors.request.use(request => {
    console.log(request);
    //Edit request config
    return request;
}, error =>{
    console.log(error);
    return Promise.reject(error);
});
//axios.interceptors.request.eject(myInterceptor);

//let nextInterceptor = 
axios.interceptors.response.use(response => {
    console.log(response);
    return response;
}, error =>{
    console.log(error);
    return Promise.reject(error);
});
//axios.interceptors.request.eject(nextInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
