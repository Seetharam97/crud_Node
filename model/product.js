const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema  = new Schema({
	product_name: {type: String, required: true},
	product_qty: {type: String, required: true},
	user_id: {type: String, required: true},
},{
	timestamps: true
});

module.exports = mongoose.model("product", productSchema);