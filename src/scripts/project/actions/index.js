
import axios from "axios";
import {Router,Route} from "react-router";
axios.defaults.baseURL = "http://120.78.188.19:8280";

export function get_list(url,dispatch){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"get_list_success",json})
        })
}

export function click(){
    this.props.router.go(-1);
}

// export function to_login(username,password){
//     console.log(username,password)
//     return axios.post("/user/login",{
//         username:username,
//         password:password
//     })
//     .then(res=>{
//         return res.data;
//     })
//     .then(json=>{
//         return store.dispatch({type:"to_login_success",json,username})
//     })
// }

// export function to_register(username,password){
//     console.log(username,password)
//     return axios.post("/user/register",{
//         username:username,
//         password:password
//     })
//     .then(res=>{
//         return res.data;
//     })
//     .then(json=>{
//         return store.dispatch({type:"to_register_success",json})
//     })
// }