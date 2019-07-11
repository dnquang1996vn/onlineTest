const AUTH = "AUTH";
export const GET_USER = `${AUTH}/GET_USER`;
export const IS_AUTHENTICATED = `${AUTH}/IS_AUTHENTICATED`;
export const MUTATE_USER = `${AUTH}/MUTATE_USER`;
export const LOGIN = `${AUTH}/LOGIN`;
export const REGISTER = `${AUTH}/REGISTER`;
export const LOGOUT = `${AUTH}/LOGOUT`;

const POST = "POST/";
export const MUTATE_POST = POST + "MUTATE_POST";
export const ADD_NEW_POST = POST + "ADD_NEW_POST";
export const FETCH_POSTS = POST + "FETCH_POSTS";
export const DELETE_POST = POST + "DELETE_POST";
export const EDIT_POST = POST + "EDIT_POST";
