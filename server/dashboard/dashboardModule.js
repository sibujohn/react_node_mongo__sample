var express = require('express');
var dashboard = express.Router();
var dashboardModel = require('./dashboardModel');

dashboard.get('/getDashboardList', function(req, res, next) {
	dashboardModel.find({}, function(err, items) {
		var data;
		if(items){
			items.forEach(function(item) {
				item.imgSrc = '../images/uploads/'+item.img
			});
			data = {status:1, dashboardList:items};
		}
		else{
			data = {status:0, message: 'No list found.' };
		}
	    res.send(data);
	});
});
module.exports = dashboard;
