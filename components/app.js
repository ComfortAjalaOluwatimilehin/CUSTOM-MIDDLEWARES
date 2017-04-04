import React,{Component} from "react"
import {connect} from "react-redux"
import AllUsers from "./allusers"




class App extends Component {

		render(){
			return (

				<div>
					<AllUsers />
				</div>
			)
		}
}


export default App;