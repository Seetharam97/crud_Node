const mongoose = require("mongoose");
const config = require("../config.json");


// mongo connection
mongoose.connect(config.connectionString, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true
});

mongoose.Promise = global.Promise;

let database = mongoose.connection;

database.on('error', console.error.bind(console, "connection error"));
database.once('open', function(){
	console.log("Mongo connection successfully");
});

module.exports = {
	users: require('../model/user.js'),
	product: require('../model/product.js'),
}