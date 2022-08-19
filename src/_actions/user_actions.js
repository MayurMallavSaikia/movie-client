import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
} from './types';
import { USER_SERVER } from '../components/Config.js';



export function registerUser(dataToSubmit){
    const request = axios.post("https://cinemahdbackend.herokuapp.com/api/users/register",dataToSubmit)
        .then(response => response.data);
    
    return {
        type: REGISTER_USER,
        payload: request  
    }
}

export function loginUser(dataToSubmit){
    const request = axios.post("https://cinemahdbackend.herokuapp.com/api/users/login",dataToSubmit)
                .then(response => response.data);

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function auth(){
    const request = axios.get(`${USER_SERVER}/auth`)
    .then(response => response.data);

    return {
        type: AUTH_USER,
        payload: request
    }
}

export function logoutUser(dataToSubmit){
    const request = axios.post("https://cinemahdbackend.herokuapp.com/api/users/logout",dataToSubmit)
    .then(response => response.data);

    return {
        type: LOGOUT_USER,
        payload: request
    }
}

