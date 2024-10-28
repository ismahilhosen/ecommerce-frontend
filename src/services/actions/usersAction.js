import axios from "axios";
import { GET_USERS_FALL, GET_USERS_REQUEST, GET_USERS_SUCCESS } from "../constans/usersConstan"

export const getUsersAction = (dispatch) => async ()=>{
    dispatch({type: GET_USERS_REQUEST});
    try {
        const res = axios.get("https://jsonplaceholder.typicode.com/users");
        dispatch({type: GET_USERS_SUCCESS, payload: res.data});
    } catch (error) {
        dispatch({type:GET_USERS_FALL, payload: error.message});
    }
    
}