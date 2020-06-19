import axios from 'axios';
import {ADD_TO_CART_USER, AUTH_USER} from '../constants/constants';

export function addToCart(_id){
    const request = axios.post(SERVER_PATH + `/api/cart/addToCart?productId=${_id}`)
        .then(response => response.data);

    return{
        type: ADD_TO_CART_USER,
        playload:request
    }
}

export function auth() {
    const request = axios.get(SERVER_PATH + `/api/cart/auth`)
        .then(response => response.data);

    return {
        type: AUTH_USER,
        payload: request
    }
}