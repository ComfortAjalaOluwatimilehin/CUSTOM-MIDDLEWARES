var express = require("express"),
app = express(),
morgan = require("morgan"),
http = require("http")




//app setup


app.use(morgan("combined"))
app.set("port", process.env.PORT || 3000)
app.use(express.static(__dirname + "/public"))

//server

var server = http.createServer(app)

server.listen(app.get("port"), function(){	console.log("Server serving from port: ", app.get("port"))})