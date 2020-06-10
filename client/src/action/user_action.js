import axios from 'axios';
import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_FAIL,
    LOAD_USER,
    AUTH_ERROR,
    LOG_OUT, LOAD_SM,
    AUTH_USER,
    ADD_TO_CART_USER
} from '../constants/constants';
import { setToken } from "../setToken";

export function addToCart(_id){
    const request = axios.post(LOCAL_PATH +`/api/cart/addToCart?productId=${_id}`)
        .then(response => response.data);

    return{
        type: ADD_TO_CART_USER,
        playload:request
    }
}

export function auth() {
    const request = axios.get(LOCAL_PATH +`/api/cart/auth`)
        .then(response => response.data);

    return {
        type: AUTH_USER,
        payload: request
    }
}