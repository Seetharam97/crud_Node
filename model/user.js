const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const crypto = require("crypto");

const userSchema = new Schema({
	uuid: {type: String, unique: true},
	name: {type: String, required: true },
	first_name: {type: String, required: true},
	last_name: {type: String, required: true},
	age: {type: Number, required: false, },
	education: {type: String, required: false},
	address: {type: Array, required: false},
	role: {type: String, required: false},
	user_name: {type: String, required: true, unique: true},
	email: {type: String, required: true, unique: true},
	mobile: {type: String, required: true, unique:true},
	password: {type:String, required: true},
	verify_token: {type: String, required: false},
	login_status: {type: Boolean, required: false},  //login = true, logout = false

},{
	timestamps: true
});

userSchema.pre("save", function (next) {
	this.uuid = "USR"+ crypto.pseudoRandomBytes(6).toString('hex').toUpperCase()
	next();
})

module.exports = mongoose.model('user', userSchema);