
import * as TYPES from "../actions/types"

var fetchUser  = ({dispatch}) =>{
		
		return next=>action=>{

					if(!action.payload || !action.payload.then)
							return next(action)
							

					action.payload
					.then(response =>{
							
							return dispatch({type:TYPES.FETCH_USERS, payload:response.data})

					})
					
					return next(action)
		}



	}



export {fetchUser as FETCHUSER}

