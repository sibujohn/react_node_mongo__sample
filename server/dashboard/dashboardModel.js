var mongoose = require('mongoose');

var dashboardSchema = new mongoose.Schema({
	id: { type: Number, unique: true, index: true },
	category: String,
	description: String,
	img: String,
	imgSrc: String
});

module.exports = mongoose.model('DashBoard', dashboardSchema);