import {FETCH_USERS,FETCHING_USERS } from "./types"
import axios from "axios"



var fetch = (users)=>{
	return {
		type:FETCH_USERS,
		payload:users
	}
}



var fetchUsers= ()=>{
	const request = axios.get("https://jsonplaceholder.typicode.com/users")
	return {
		type:FETCHING_USERS,
		payload:request
	}
}

export {fetch, fetchUsers}