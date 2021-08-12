const jwt = require("jsonwebtoken");

module.exports = function (req,res,next) {
	let token = req.header("x-auth-token");
	if(!token) return res.json({"status": "Failed","message": "Access denied.No token"});

	try{
		const decoded = jwt.verify(token, "randomString");
		req.user = decoded.user;
		next();
	}catch(err){
		res.json({"status": "Failed", "message": err.message});
	}
}