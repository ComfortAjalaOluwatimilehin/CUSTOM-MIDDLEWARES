import React, {Component} from "react"
import {render} from "react-dom"
import App from "./components/app"
import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux"
import reducers from "./reducers/index"
import {FETCHUSER} from "./middlewares/users"

require("./style")

var store = createStore(reducers,applyMiddleware(FETCHUSER))

//applyMiddleware(FETCHUSER)(createStore)


render(

	<Provider store={store}>
			<App />
	</Provider>,
	document.getElementById("app")
	)