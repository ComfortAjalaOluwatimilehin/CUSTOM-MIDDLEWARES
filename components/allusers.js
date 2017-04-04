import React, {Component} from "react"
import { Button } from 'react-bootstrap'
import {connect} from "react-redux"
import Users from "../users"
import axios from "axios"
import * as ACTIONS from "../actions/user"

class AllUsers extends Component{
			componentWillMount(){
					this.props.fetchUsers()
			}

			displayUser(user){
				return (
						<div key={user.id}>
							<h1>{user.name}</h1>
							<Button bsStyle="primary">Click Me </Button>
						</div>

					)
			}

			render(){
		
					return (

								<div>

										{this.props.users.map(user=>this.displayUser(user))}


								</div>
						)
			}
}



const mapStatetoProps = (state) =>{
		return {
			users:state.users
		}
}


const mapDispatchtoProps = (dispatch) =>{
	return {
		fetchUsers:()=>{
			dispatch(ACTIONS.fetchUsers())
		}
	}
}


export default connect(mapStatetoProps, mapDispatchtoProps)(AllUsers)