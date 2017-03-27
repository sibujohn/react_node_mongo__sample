var express = require('express');
var data = express.Router();
var dataModel = require('./dataModel');
data.post('/addNewItem', function(req, res, next) {
	var newItem = new dataModel({
		name: req.body.name,
		scientificName: req.body.scientificName,
		species: req.body.species,
		category: req.body.category,
		lifespan: req.body.lifespan,
		weight: req.body.weight,
		height: req.body.height,
	});
	var validDataFlag = true;
	if(newItem.category != 'animal' && newItem.category != 'bird' && newItem.category != 'fish' && newItem.category != 'plant'){
		res.send({ status:0, message: 'Invalid category'});
		return;
	}
	newItem.save(function (err, item) {
		if (err) {
			console.log(err)
			return next(err);
		}
		var data;
		if(item){
			data = {status:1, message: 'Item added succesfully'};
		}
		else{
			data = { status:0, message: 'Could not add'};
		}
		res.send(data);
	});
});
data.get('/getDataList', function(req, res, next) {
	var category = req.query.category;
	var conditions = {category: category};
	dataModel
		.find(conditions)
		.exec(function(err, list) {
			if (err) {
				console.log(err)
				return next(err);
			}
			var data;
			if(list){
				list.forEach(function(item) {
					item.img = '../images/uploads/'+item.name.toLowerCase()+'.png'
				});
				data = {status:1, list: list};
			}
			else{
				data = { status:0, message: 'Could not find'};
			}
			res.send(data);
		});
});

module.exports = data;
