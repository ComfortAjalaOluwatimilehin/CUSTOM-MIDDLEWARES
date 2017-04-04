

var path = require("path")



module.exports =  {

		entry:path.resolve(__dirname, "app"),
		output:{
			path:path.resolve(__dirname, "public"),
			filename:"bundle.js"
		},
		module:{
			loaders:[

				{test:/\.jsx?$/, exclude:/node_modules/, loader:"babel-loader" },
				{test:/\.css$/, loader:"style-loader!css-loader"}
			]
		},
		resolve:{
			extensions:[ ".", ".js", "jsx", ".json", ".css"]
		}
}