export const REGISTER_SUCCESS = "REGISTER SUCCESS";
export const LOGIN_SUCCESS = "LOGIN SUCCESS";
export const LOGIN_FAIL = "LOGIN FAIL";
export const REGISTER_FAIL = "REGISTER FAIL";
export const LOAD_USER = "LOAD USER";
export const AUTH_ERROR = "AUTHENTICATION ERROR";
export const LOG_OUT = "LOG OUT";
export const SM_LOGIN_SUCCESS = "SM LOGIN SUCCESS";
export const SM_LOGIN_FAIL = "SM LOGIN FAIL";
export const LOAD_SM = "LOAD SM";
export const ADD_TO_CART_USER = 'add_to_cart_user';
export const AUTH_USER = 'auth_user';

export const SERVER_PATH = getServerPath();

export const CLIENT_PATH = getClientPath();

//export const LOCAL_PATH = document.location.origin;

function getClientPath() {

    if (process.env.NODE_ENV === 'production') {
        return document.location.origin;
    } else {
        return 'http://localhost:3000';
    }

}

function getServerPath() {
    if (process.env.NODE_ENV === 'production') {
        return document.location.origin;
    } else {
        return 'http://localhost:4001';
    }
}