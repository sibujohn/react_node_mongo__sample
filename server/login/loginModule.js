var express = require('express');
var login = express.Router();
var loginModel = require('./loginModel');
login.post('/loginSubmit', function(req, res, next) {
	var name = req.body.name;
	var password = req.body.password;
	loginModel.findOne({ name: name, password: password }, function(err, user) {
		if (err) {
			return next(err);
		}
		var data;
		if(user){
			data = {status:1, user:user};
		}
		else{
			data = { status:0, message: 'User not found.' };
		}
		res.send(data);
	});
});

module.exports = login;
