const express = require("express");
const router = express.Router();
const userService = require("./user.service.js");
const auth = require("../middleware/auth");
// const 

router.post('/addUserDetails', auth, userService.addUserDetails);
router.get("/getTheUserDetails", getTheUserDetails);
router.get("/getIndiDetails", getIndiDetails);
router.put("/updateTheUserDetails", updateTheUserDetails);
router.delete("/deleteTheUserDetails", deleteTheUserDetails);
router.post("/addProductByUsers", addProductByUsers);
router.get("/getTheProductDetails", getTheProductDetails);
router.get("/getTheProductAndUserDetails", getTheProductAndUserDetails);
router.get("/emailIDAvailability", emailIDAvailability);
router.get("/mobile_Availability", userService.mobile_Availability);
router.post("/register", userService.register);
router.get("/login", userService.login);
router.put("/forgetPassword", userService.forgetPassword);
router.put("/resetPassword", userService.resetPassword);
router.put("/logout", userService.logout);

module.exports = router;

// add the user details;
function addUserDetails(req,res,next) {
	userService.addUserDetails(req.body, function(result){
		res.json({"status": "Success", "message": "User details successfully stored", "data": result})
	})
};

// get the user detail
function getTheUserDetails(req,res,next) {
	userService.getTheUserDetails(req.body, function(result){
		res.json({"status": "Success", "message": "User details fetched successfully", "data": result});
	})
}

// get the individual details
function getIndiDetails(req,res,next) {
	userService.getIndiDetails(req.query, function(result) {
		res.json({"status": "Success", "message": "Indi-User details fetched successfully", "data":result})
	})
}

// update the details
function updateTheUserDetails(req,res, next) {
	userService.updateTheUserDetails(req.body, function(result){
		res.json({"status": "Success", "message": "User details updated successfully", "data": result})
	})
}

function deleteTheUserDetails(req,res, next) {
	userService.deleteTheUserDetails(req.query, function(result){
		res.json({"status": "Success", "message": "User details deleted successfully"})
	})
}

function addProductByUsers(req,res, next) {
	userService.addProductByUsers(req.query, function (result) {
		res.json({"status": "Success", "message": "Product added successfully","data": result});
	})
}

function getTheProductDetails(req,res,next) {
	userService.getTheProductDetails(req.query, function(result) {
		res.json({"status": "Success", "message": "Product details fetched successfully based upon the user", "data": result});
	})
}

function getTheProductAndUserDetails(req,res,next){
	userService.getTheProductAndUserDetails(req, function(result) {
		res.json({"status": "Success", "message": "Product details", "data": result});
	})
}

function emailIDAvailability(req,res,next) {
	userService.emailIDAvailability(req.query, function (result) {
		if(result === "email already exits"){
			res.json({"status": "Failed", "message":"email already exits"});
		}else if(result === "Success"){
			res.json({"status": "Success", "message":""});
		}
	})
};